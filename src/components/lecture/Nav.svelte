<script>
  export let lecture;

  import { stores } from "@sapper/app";
  const { session } = stores();
</script>

<ul class="nav py-3">

  {#if lecture.objectives}
    <li class="nav-item">
      <a
        class="nav-link"
        id="objectives-link"
        data-toggle="collapse"
        href="#objectives"
        role="button"
        aria-controls="objectives"
        aria-selected="false">
        <ion-icon name="checkmark-circle-outline" />
        Ziele &amp; Inhalte
      </a>
    </li>
  {/if}

  {#if lecture.examinfo}
    <li class="nav-item">
      <a
        class="nav-link active"
        id="exam-link"
        data-toggle="collapse"
        href="#examinfo"
        role="button"
        aria-controls="examinfo"
        aria-selected="false">
        <ion-icon name="hourglass-outline" />
        Prüfung
      </a>
    </li>
  {/if}

  {#if lecture.links}
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="link-outline" />
        Links
      </a>
      <div class="dropdown-menu">
        {#each lecture.links as link}
          <a class="dropdown-item" href={link.url}>{link.text}</a>
        {/each}
      </div>
    </li>
  {/if}

  {#if lecture.slides && lecture.slides.length > 0}
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="cloud-download-outline" />
        Slides
      </a>
      <div class="dropdown-menu">
        {#each lecture.slides as slide}
          <a
            class="dropdown-item d-flex justify-content-between
            align-items-center"
            href="/lectures/{lecture.short}/slides/{slide.filename}.pdf">
            {slide.title}
            {#if lecture.last === $session.currentSemester}
              <span class="badge text-monospace font-weight-light">
                (Letzte Änderung: {slide['last modified']})
              </span>
            {/if}
          </a>
        {/each}
      </div>
    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="cloud-download-outline" />
        Handouts
      </a>
      <div class="dropdown-menu">
        {#each lecture.slides as slide}
          <a
            class="dropdown-item d-flex justify-content-between
            align-items-center"
            href="/lectures/{lecture.short}/handouts/{slide.filename}.pdf">
            {slide.title}
            {#if lecture.last === $session.currentSemester}
              <span class="badge text-monospace font-weight-light">
                (Letzte Änderung: {slide['last modified']})
              </span>
            {/if}
          </a>
        {/each}
      </div>
    </li>
  {/if}

  {#if lecture.exercises && lecture.exercises.length > 0}
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="cloud-download-outline" />
        Aufgabenblätter
      </a>
      <div class="dropdown-menu">
        {#each lecture.exercises as exercise}
          <a
            class="dropdown-item d-flex justify-content-between
            align-items-center"
            href="/lectures/{lecture.short}/exercises/{exercise.filename}.pdf">
            {exercise.title}
            {#if lecture.last === $session.currentSemester}
              <span class="badge text-monospace font-weight-light">
                (Letzte Änderung: {exercise['last modified']})
              </span>
            {/if}
          </a>
        {/each}
      </div>
    </li>
  {/if}

  {#if lecture.videos && lecture.videos.length > 0}
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="cloud-download-outline" />
        Videos
      </a>
      <div class="dropdown-menu">
        {#each lecture.videos as video}
          <a
            class="dropdown-item d-flex justify-content-between
            align-items-center"
            href={video.url}>
            {video.title}
            {#if lecture.last === $session.currentSemester}
              <span class="badge text-monospace font-weight-light">
                (Letzte Änderung: {video['last modified']})
              </span>
            {/if}
          </a>
        {/each}
      </div>
    </li>
  {/if}

  {#if lecture.exams}
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <ion-icon name="cloud-download-outline" />
        Klausuren
      </a>
      <div class="dropdown-menu">
        {#each lecture.exams as exam}
          <a
            class="dropdown-item"
            href="/lectures/{lecture.short}/exams/{exam.url}">
            {exam.text}
          </a>
        {/each}
      </div>
    </li>
  {/if}

</ul>

{#if lecture.objectives}
  <div class="collapse" id="objectives">
    <div class="container-fluid padding py-3">
      <div class="card border-dark padding">
        <h4 class="card-header">Ziele &amp; Inhalte</h4>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            {#each lecture.objectives as objective}
              <li class="list-group-item">
                <ion-icon name="checkmark-circle-outline" />
                {objective}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if lecture.examinfo}
  <div class="collapse" id="examinfo">
    <div class="container-fluid padding py-3">
      <div class="card border-dark padding">
        <h4 class="card-header">Prüfung</h4>
        <div class="card-body">
          {#each lecture.examinfo as info}
            <h5>{info.title}</h5>
            <p>{info.text}</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
