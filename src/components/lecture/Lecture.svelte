<script>
  export let lecture;

  import { nextLecture } from "../../misc/dateHelper.js";

  $: next = nextLecture(lecture);
</script>

<style>

</style>

<div class="card border-dark">
  <h4 class="card-header" id="lectureHeading">
    <ion-icon name="book-outline" />
    Vorlesung
  </h4>
  <div class="card-body">
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
    <h6 class="card-subtitle mb-2 text-muted">
      <ion-icon name="alarm-outline" />
      {lecture.daytime},
      <ion-icon name="pin-outline" />
      {lecture.room}
    </h6>

    <ul class="list-group list-group-flush">
      {#each lecture.lectures as l}
        <li
          class="list-group-item {l.cancelled ? 'disabled' : ''} d-flex
          justify-content-between align-items-center">
          {l.topic}
          <span
            class="badge {l.cancelled ? 'badge-danger' : 'badge-success'}
            text-monospace font-weight-light">
            {l.date}
          </span>
        </li>
      {/each}
    </ul>

  </div>
</div>
