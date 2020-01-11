<script>
  export let currentSemester;
  const cols = 12 / currentSemester.lectures.length;
</script>

<div class="container-fluid">
  <div class="row jumbotron">
    {#each currentSemester.lectures as l}
      <div
        class="col-xs-{cols} col-sm-{cols} col-md-{cols} col-lg-{cols} col-xl-{cols}
        d-flex justify-content-center">
        <a href="lectures/{l.short}">
          <button type="button" class="btn btn-outline-secondary btn-lg">
            {l.long}
          </button>
        </a>
      </div>
    {/each}
  </div>
</div>
