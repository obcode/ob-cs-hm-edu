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
  import { stores } from "@sapper/app";
  const { session } = stores();

  function daysUntil(str) {
    const today = new Date().getTime();
    const date = new Date(
      str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1")
    ).getTime();
    return Math.ceil((date - today) / (1000 * 3600 * 24));
  }

  function daysUntilStr(difference) {
    if (difference == 1) return "Morgen!";
    if (difference == 0) return "Heute!";
    if (difference > 0) return `noch ${difference} Tage`;
    if (difference < 0) return "Zeit abgelaufen";
  }

  function badge(n) {
    if (n == 0) {
      return "badge-danger";
    } else if (n < 0) {
      return "";
    } else if (n > 7) {
      return "badge-success";
    } else {
      return "badge-warning";
    }
  }
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
      {#if lecture.last === $session.currentSemester && lecture.dates}
        {#each lecture.dates as date}
          <div
            class="alert alert-warning d-flex justify-content-between"
            role="alert">
            {date.date}, {date.time}: {date.title}
            <span class="badge-pill mx-1 {badge(daysUntil(date.date))}">
              {daysUntilStr(daysUntil(date.date))}
            </span>
          </div>
        {/each}
      {/if}
      <div class="container-fluid padding">
        <div class="row">
          <div class="btn-group" role="group" aria-label="Downloads">
            {#if lecture.lecture}
              <a
                class="btn btn-info"
                href="/ics/{lecture.short}.ics"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Per URL in Ihren Kalender importieren um auf dem
                Laufenden zu bleiben.">
                <ion-icon name="calendar-outline" />
                Termine (ics)
              </a>
            {/if}
            {#if lecture.lecture || lecture.slides || lecture.handouts || lecture.exercises || lecture.exams}
              {#if lecture.git}
                <a class="btn btn-info" href={lecture.git.url}>
                  <ion-icon name="logo-github" />
                  Git-Repo
                </a>
              {/if}
              <a
                class="btn btn-info"
                href="/lectures/{lecture.short}/{lecture.short}.zip"
                type="application/zip">
                <ion-icon name="archive-outline" />
                Alle PDFs (zip)
              </a>
            {/if}
            <a class="btn btn-info" href="/lectures/{lecture.short}.json">
              <ion-icon name="information-circle-outline" />
              Alle Infos (JSON)
            </a>
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

{#if lecture.last === $session.currentSemester && lecture.lecture}
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
{/if}

<!-- 
{#if lecture.slides && lecture.slides.length > 0}
  <div id="slides">
    <Slides {lecture} />
  </div>
{/if}

<hr />

{#if lecture.exercises && lecture.exercises.length > 0}
  <div id="exercises">
    <Exercises {lecture} />
  </div>
{/if} -->
