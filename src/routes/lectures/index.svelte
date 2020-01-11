<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`lectures.json`)
      .then(r => r.json())
      .then(lectures => {
        return { lectures };
      });
  }
</script>

<script>
  export let lectures;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Vorlesungen</title>
</svelte:head>

<h1>Aktuell</h1>

<ul>
  {#each lectures.current as lecture}
    <li>
      <a rel="prefetch" href="lectures/{lecture.slug}">{lecture.title}</a>
    </li>
  {/each}
</ul>

<h1>Alle</h1>

<ul>
  {#each lectures.all as lecture}
    <li>
      <a rel="prefetch" href="lectures/{lecture.slug}">{lecture.title}</a>
    </li>
  {/each}
</ul>
