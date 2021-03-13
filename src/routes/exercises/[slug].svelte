<script context="module">
  export async function preload({ params }) {
    return params;
  }
</script>

<script>
  export let slug;

  import Nav from "../../components/exercises/Nav.svelte";
  import Feedback from "../../components/exercises/Feedback.svelte";
  import GitHub from "../../components/exercises/GitHub.svelte";
  import CI from "../../components/exercises/CI.svelte";
  import GitBasics from "../../components/exercises/GitBasics.svelte";
  import Communication from "../../components/exercises/Communication.svelte";
  import Rating from "../../components/exercises/Rating.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>ob | Abgaben | {slug}</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-12">
      <h1 class="display-6">Bearbeitung und Abgabe der Praktikumsaufgaben</h1>
    </div>
    <hr />
    <div class="col-12">
      <p class="lead">
        Alle Abgaben meiner Praktikumsaufgaben erfolgen auf
        <a href="https://gitlab.lrz.de/">GitLab</a>
        mit Hilfe von Git.
      </p>
      <!-- <hr class="my-4" />
      <p>
        Dabei ist mir, neben der Lösung der eigentlichen Aufgabenstellung, sehr
        wichtig, dass Sie nach den hier beschriebenen Schritten vorgehen.
      </p> -->
    </div>
  </div>
</div>

<!-- <div class="container-fluid">
  <Nav {slug} />
  {#if slug == 'feedback'}
    <Feedback />
  {:else if slug == 'github'}
    <GitHub />
  {:else if slug == 'ci'}
    <CI />
  {:else if slug == 'git-basics'}
    <GitBasics />
  {:else if slug == 'communication'}
    <Communication />
  {:else if slug == 'rating'}
    <Rating />
  {/if}
</div> -->
