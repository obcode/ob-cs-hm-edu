<script>
  export let base;
  export let segment;
  const currentLectureShorts = base.currentSemester.lectures.map(l => l.short);
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
        <li class="nav-item {segment === 'lectures' ? 'active' : ''} dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="/lectures"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
            Lehrveranstaltungen
          </a>
          <div class="dropdown-menu">
            {#each base.allLectures as lecture}
              <a
                class="dropdown-item {currentLectureShorts.includes(lecture.short) ? 'text-success' : ''}"
                href="/lectures/{lecture.short}">
                {lecture.long}
                {#if currentLectureShorts.includes(lecture.short)}
                  ({base.currentSemester.short})
                {/if}
              </a>
            {/each}
          </div>
        </li>
        <li class="nav-item {segment === 'exercises' ? 'active' : ''}">
          <a class="nav-link" href="/exercises/feedback">Praktikumsabgaben</a>
        </li>
        <li class="nav-item {segment === 'devbox' ? 'active' : ''}">
          <a class="nav-link" href="/devbox">DevBox VM</a>
        </li>
        <li class="nav-item {segment === 'theses' ? 'active' : ''}">
          <a class="nav-link" href="/theses">Abschlussarbeiten</a>
        </li>
        <li class="nav-item {segment === 'about' ? 'active' : ''}">
          <a class="nav-link" href="/about">Prof. Dr. Oliver Braun</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
