<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(base => {
        return { base };
      });
  }
</script>

<script>
  import Carousel from "../components/Carousel.svelte";
  import Card from "../components/Card.svelte";
  import Jumbotron from "../components/Jumbotron.svelte";

  export let base;
  const currentSemester = base.currentSemester;
</script>

<svelte:head>
  <title>ob.cs.hm.edu</title>
</svelte:head>

<Carousel {currentSemester} />
<Jumbotron {currentSemester} />

<div class="container-fluid padding">
  <div class="row padding">
    {#each base.allLectures as lecture}
      <Card {lecture} />
    {/each}
  </div>
</div>
