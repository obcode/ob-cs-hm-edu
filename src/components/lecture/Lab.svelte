<script>
  export let lab;

  import { nextLabs } from "../../misc/dateHelper.js";

  $: next = nextLabs(lab);

  function allInThePast(l) {
    return l.dates.every(d => inThePast(d.date));
  }

  function inThePast(day) {
    const date = new Date(day.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today > date;
  }

  function badge(l, d) {
    if (inThePast(d.date)) return "";
    if (l.cancelled) return "badge-danger";
    if (d.cancelled) return "badge-danger";
    return "badge-success";
  }
</script>

<style>

</style>

<div class="card border-dark">
  <h4 class="card-header">
    <ion-icon name="laptop-outline" />
    Praktikum
  </h4>
  <div class="card-body">
    {#each lab.groups as group, index}
      <h6 class="card-subtitle mb-2 text-muted">
        {group.name}:
        <ion-icon name="alarm-outline" />
        {group.daytime},
        <ion-icon name="location-outline" />
        {group.room}
      </h6>
      {#if next[0]}
        <!-- {#each next as lab} -->
        <div class="alert alert-danger" role="alert">
          Nächstes Praktikum am {next[index].date}:
          {#if next[index].cancelled}
            fällt aus.
          {:else}
            <span class="font-italic">{next[index].topic}.</span>
          {/if}
        </div>
        <!-- {/each} -->
      {/if}
    {/each}

    <hr />

    <ul class="list-group list-group-flush">
      {#each lab.labs as l}
        <li
          class="list-group-item {l.cancelled || allInThePast(l) ? 'disabled' : ''}
          d-flex justify-content-between align-items-center">
          {l.topic}
          <span class="padding">
            {#each l.dates as d, i}
              <span
                class="badge mx-1 {badge(l, d)} text-monospace font-weight-light">
                {d.date}
              </span>
            {/each}
          </span>
        </li>
      {/each}
    </ul>

  </div>
</div>
