<script>
  export let lecture;
  export let exercise;
</script>

<div class="col-sm-6 col-md-6 col-lg-4 padding py-3">
  <div class="card border-dark padding">
    <div class="card-body">
      <h5 class="card-title">{exercise.title}</h5>
      <a href="/lectures/{lecture.short}/exercises/{exercise.filename}.pdf">
        <img
          class="card-img-top d-none d-sm-block"
          src="/lectures/{lecture.short}/thumbnails/exercises/{exercise.filename}.png"
          alt="" />
      </a>
      {#if exercise['last modified']}
        <p class="card-text">Letzte Änderung: {exercise['last modified']}</p>
      {/if}
      <a
        href="/lectures/{lecture.short}/exercises/{exercise.filename}.pdf"
        class="btn btn-secondary">
        PDF
      </a>
    </div>
  </div>
</div>
