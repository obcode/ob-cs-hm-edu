<script>
  export let lecture;
</script>

<style>

</style>

<div class="card border-dark">
  <h4 class="card-header" id="lectureHeading">
    <ion-icon name="book" />
    Vorlesung
  </h4>
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">
      <ion-icon name="clock" />
      {lecture.daytime},
      <ion-icon name="globe" />
      {lecture.room}
    </h6>

    <ul class="list-group list-group-flush">
      {#each lecture.lectures as l}
        <li
          class="list-group-item {l.cancelled ? 'disabled' : ''} d-flex
          justify-content-between align-items-center">
          {l.topic}
          <span class="badge {l.cancelled ? 'badge-danger' : 'badge-success'}">
            {l.date}
          </span>
        </li>
      {/each}
    </ul>

  </div>
</div>
