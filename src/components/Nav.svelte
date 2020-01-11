<script>
  export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ob.cs.hm.edu</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item {segment === 'lectures' ? 'active' : ''}">
          <a class="nav-link" rel="prefetch" href="lectures">Vorlesungen</a>
        </li>
        <li class="nav-item {segment === 'devbox' ? 'active' : ''}">
          <a class="nav-link" href="devbox">DevBox VM</a>
        </li>
        <li class="nav-item {segment === 'exercises' ? 'active' : ''}">
          <a class="nav-link" href="exercises">Praktikumsabgaben</a>
        </li>
        <li class="nav-item {segment === 'about' ? 'active' : ''}">
          <a class="nav-link" href="about">Prof. Dr. Oliver Braun</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
