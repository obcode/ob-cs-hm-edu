<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/index.json`)
      .then(r => r.json())
      .then(base => {
        return { base };
      });
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let base;
  export let segment;

  session.set({});
  const currentSemester = base.currentSemester.long;
  $session = { currentSemester };
</script>

<style>
  main {
    padding-bottom: 50px;
  }
</style>

<Nav {segment} {base} />

<main>
  <slot />
</main>

<Footer />
