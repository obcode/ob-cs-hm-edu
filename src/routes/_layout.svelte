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

<Nav {segment} {base} />

<main>
  <slot />
  <Footer />
</main>
