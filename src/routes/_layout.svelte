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
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let base;
  export let segment;
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
