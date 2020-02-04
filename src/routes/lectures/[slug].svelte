<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`lectures/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { lecture: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let lecture;

  import Lecture from "../../components/lecture/Lecture.svelte";
  import Lab from "../../components/lecture/Lab.svelte";
  import Slides from "../../components/lecture/Slides.svelte";
  import Exercises from "../../components/lecture/Exercises.svelte";
  import Nav from "../../components/lecture/Nav.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>ob | {lecture.long}</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
      <h1 class="display-6">{lecture.long}</h1>
      <p class="lead">Stand: {lecture.last}</p>
      {#if lecture.dates}
        {#each lecture.dates as date}
          <div class="alert alert-warning" role="alert">
            {date.date}, {date.time}: {date.title}
          </div>
        {/each}
      {/if}
      <div class="container-fluid padding">
        <div class="row">
          <div class="btn-group" role="group" aria-label="Downloads">
            {#if lecture.lecture}
              <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 py-1"> -->
              <a class="btn btn-info" href="/ics/{lecture.short}.ics">
                <ion-icon name="calendar" />
                Termine (ics)
              </a>
              <!-- </div> -->
            {/if}
            {#if lecture.lecture || lecture.slides || lecture.handouts || lecture.exercises || lecture.exams}
              <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 py-1"> -->
              <a
                class="btn btn-info"
                href="/lectures/{lecture.short}/{lecture.short}.zip"
                type="application/zip">
                <ion-icon name="download" />
                Alle PDFs (zip)
              </a>
              <!-- </div> -->
            {/if}
            <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 py-1"> -->
            <a class="btn btn-info" href="/lectures/{lecture.short}.json">
              <ion-icon name="download" />
              Alle Infos (JSON)
            </a>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-md-block col-md-6 col-lg-4">
      <img
        class="img-fluid"
        src={`/img/small/${lecture.short}.jpg`}
        alt={lecture.long} />
    </div>
  </div>
</div>

<Nav {lecture} />

{#if lecture.lecture}
  <div class="container-fluid padding">
    <div class="row padding">
      <div class="col-xs-12 col-sm-12 col-md-6 py-2">
        <Lecture lecture={lecture.lecture} />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 py-2">
        <Lab lab={lecture.lab} />
      </div>
    </div>
  </div>

  <hr />
{/if}

{#if lecture.slides}
  <div id="slides">
    <Slides {lecture} />
  </div>
{/if}

<hr />

{#if lecture.exercises}
  <div id="exercises">
    <Exercises {lecture} />
  </div>
{/if}
