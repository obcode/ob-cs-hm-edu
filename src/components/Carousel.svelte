<script>
  export let currentSemester;
</script>

<style>
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
  .carousel-caption25 {
    position: absolute;
    top: 25%;
  }
</style>

<div class="lectures">
  <div id="lectureCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/img/home.jpg"
          class="d-block w-100"
          alt="Prof. Dr. Oliver Braun" />
        <div class="carousel-caption carousel-caption25">
          <h1>Prof. Dr. Oliver Braun</h1>
        </div>
      </div>
      {#each currentSemester.lectures as l}
        <div class="carousel-item ">
          <img src="/img/{l.short}.jpg" class="d-block w-100" alt={l.long} />
        </div>
      {/each}
    </div>
  </div>
</div>
