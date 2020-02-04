<script>
  export let lab;

  import { nextLabs } from "../../misc/dateHelper.js";

  $: next = nextLabs(lab);
</script>

<style>

</style>

<div class="card border-dark">
  <h4 class="card-header">
    <ion-icon name="laptop" />
    Praktikum
  </h4>
  <div class="card-body">
    {#if next[0]}
      {#each next as lab}
        <div class="alert alert-danger" role="alert">
          Nächstes Praktikum am {lab.date}:
          {#if lab.cancelled}
            fällt aus.
          {:else}
            <span class="font-italic">{lab.topic}.</span>
          {/if}
        </div>
      {/each}
    {/if}
    {#each lab.groups as group}
      <h6 class="card-subtitle mb-2 text-muted">
        {group.name}:
        <ion-icon name="clock" />
        {group.daytime},
        <ion-icon name="globe" />
        {group.room}
      </h6>
    {/each}

    <ul class="list-group list-group-flush">
      {#each lab.labs as l}
        <li
          class="list-group-item {l.cancelled ? 'disabled' : ''} d-flex
          justify-content-between align-items-center">
          {l.topic}
          <span class="padding">
            {#each l.dates as d, i}
              <span
                class="badge mx-1 {l.cancelled || d.cancelled ? 'badge-danger' : 'badge-success'}">
                {d.date}
              </span>
            {/each}
          </span>
        </li>
      {/each}
    </ul>

  </div>
</div>
