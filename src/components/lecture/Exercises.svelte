<script>
  export let lecture;
  import Exercise from "./Exercise.svelte";
</script>

<div class="container-fluid padding">

  <h1>Aufgabenblätter</h1>

  <div class="row">

    {#each lecture.exercises as exercise}
      <Exercise {lecture} {exercise} />
    {/each}

  </div>

</div>
