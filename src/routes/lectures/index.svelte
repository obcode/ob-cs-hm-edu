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
  export let base;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  li {
    list-style-type: none;
  }
  [class*="col-"] {
    padding: 1rem;
  }
</style>

<svelte:head>
  <title>Lehrveranstaltungen</title>
</svelte:head>

<div class="container-fluid padding">
  <div class="row text-center">
    <div class="col-md-6 col-sm-12 col-xs-12">
      <h4>{base.currentSemester.long}</h4>
      <ul>
        {#each base.currentSemester.lectures as lecture}
          <li>
            <a rel="prefetch" href="lectures/{lecture.short}">{lecture.long}</a>
          </li>
        {/each}
      </ul>
    </div>
    {#if base.nextSemester}
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h4>{base.nextSemester.long}</h4>
        <ul>
          {#each base.nextSemester.lectures as lecture}
            <li>
              <a rel="prefetch" href="lectures/{lecture.short}">
                {lecture.long}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    <div
      class="{base.nextSemester ? 'col-md-12' : 'col-md-6'} col-sm-12 col-xs-12">
      <h4>Alle</h4>
      <ul>
        {#each base.allLectures as lecture}
          <li>
            <a rel="prefetch" href="lectures/{lecture.short}">{lecture.long}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
