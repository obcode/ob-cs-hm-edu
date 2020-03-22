<script>
  export let lecture;

  import { nextLecture } from "../../misc/dateHelper.js";

  $: next = nextLecture(lecture);

  function inThePast(day) {
    const date = new Date(day.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"));
    return new Date() > date;
  }

  function badge(l) {
    if (inThePast(l.date)) return "";
    if (l.cancelled) return "badge-danger";
    return "badge-success";
  }
</script>

<style>

</style>

<div class="card border-dark">
  <h4 class="card-header" id="lectureHeading">
    <ion-icon name="easel-outline" />
    Vorlesung
  </h4>
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">
      <ion-icon name="alarm-outline" />
      {lecture.daytime},
      <ion-icon name="location-outline" />
      {lecture.room}
    </h6>
    {#if next}
      <div class="alert alert-danger" role="alert">
        Nächste Vorlesung am {next.date}:
        {#if next.cancelled}
          fällt aus.
        {:else}
          <span class="font-italic">{next.topic}.</span>
        {/if}
      </div>
    {/if}

    <hr />

    <ul class="list-group list-group-flush">
      {#each lecture.lectures as l}
        <li
          class="list-group-item {l.cancelled || inThePast(l.date) ? 'disabled' : ''}
          d-flex justify-content-between align-items-center">
          {l.topic}
          <span class="badge {badge(l)} text-monospace font-weight-light">
            {l.date}
          </span>
        </li>
      {/each}
    </ul>

  </div>
</div>
