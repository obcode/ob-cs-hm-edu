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
  .carousel-caption70 {
    position: absolute;
    top: 70%;
  }
</style>

<div class="lectures">
  <div id="lectureCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#lectureCarousel" data-slide-to="0" class="active" />
      {#each currentSemester.lectures as _, i}
        <li data-target="#lectureCarousel" data-slide-to={i + 1} />
      {/each}
    </ol>
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
          <div class="carousel-caption carousel-caption70">
            <h1>{l.long}</h1>
            <p>{currentSemester.long}</p>
          </div>
        </div>
      {/each}
    </div>
    <a
      class="carousel-control-prev"
      href="#lectureCarousel"
      role="button"
      data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#lectureCarousel"
      role="button"
      data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
