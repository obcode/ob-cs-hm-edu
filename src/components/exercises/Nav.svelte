<script>
  export let slug;
</script>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a
      class="nav-link {slug == 'feedback' ? 'active' : ''}"
      href="/exercises/feedback"
      role="tab">
      Arbeiten, Abgabe &amp; Feedback
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link {slug == 'github' ? 'active' : ''}"
      href="/exercises/github"
      role="tab">
      GitHub
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link {slug == 'ci' ? 'active' : ''}"
      href="/exercises/ci"
      role="tab">
      CI/CD
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link {slug == 'git-basics' ? 'active' : ''}"
      href="/exercises/git-basics"
      role="tab">
      Git-Basics
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link {slug == 'communication' ? 'active' : ''}"
      href="/exercises/communication"
      role="tab">
      Kommunikation und Hilfe
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link {slug == 'rating' ? 'active' : ''}"
      href="/exercises/rating"
      role="tab">
      Bewertung
    </a>
  </li>
</ul>
