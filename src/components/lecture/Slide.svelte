<script>
  export let lecture;
  export let slide;
</script>

<div class="col-sm-6 col-md-6 col-lg-4 padding py-3">
  <div class="card border-dark padding">
    <div class="card-body">
      <h5 class="card-title">{slide.title}</h5>
      <a href="/lectures/{lecture.short}/slides/{slide.filename}.pdf">
        <img
          class="card-img-top d-none d-sm-block"
          src="/lectures/{lecture.short}/thumbnails/slides/{slide.filename}.png"
          alt="" />
      </a>
      {#if slide['last modified']}
        <p class="card-text">Letzte Änderung: {slide['last modified']}</p>
      {/if}
      <a
        href="/lectures/{lecture.short}/slides/{slide.filename}.pdf"
        class="btn btn-secondary">
        Slides
      </a>
      <a
        href="/lectures/{lecture.short}/handouts/{slide.filename}.pdf"
        class="btn btn-secondary">
        Handout
      </a>
    </div>
  </div>
</div>
