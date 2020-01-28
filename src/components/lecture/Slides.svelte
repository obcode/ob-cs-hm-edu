<script>
  export let lecture;
  import Slide from "./Slide.svelte";
</script>

<div class="container-fluid padding">

  <h1>Slides &amp; Handouts</h1>

  <div class="row">

    {#each lecture.slides as slide}
      <Slide {lecture} {slide} />
    {/each}

  </div>

</div>
