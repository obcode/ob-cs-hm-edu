<div class="card border-light padding">
  <div class="card-body">
    <p>
      Für die Überprüfung Ihrer Projekte verwende ich
      <a href="https://drone.io/">Drone CI</a>
      auf meinem Server
      <a href="https://terraform.cs.hm.edu/">terraform.cs.hm.edu</a>
      sowie
      <a href="https://github.com/features/actions">GitHub Actions.</a>
      In den, von mir zu Verfügung gestellten, Repositories sind dazu bereits
      eine Datei
      <code>.drone.yml</code>
      bzw. Dateien unter
      <code>.github/workflows/</code>
      enthalten. Diese können Sie aber auch noch weiter anpassen.
    </p>
    <div class="alert alert-danger" role="alert">
      Das Entfernen meiner Tests bzw. das Ausschalten des Linters sind aber
      <strong>keine</strong>
      Option!
    </div>
    <p>
      Die GitHub Actions sollten von alleine bei jedem Push laufen. Das Projekt
      auf meinem Drone CI Server muss jedoch erst aktiviert werden. Falls ich
      Ihnen Adminrechte in Ihrem Repository gegeben habe, können Sie das nach
      dem Einloggen auf
      <a href="https://terraform.cs.hm.edu/">terraform.cs.hm.edu</a>
      selbst machen. Anderenfalls sprechen Sie mich im Praktikum an oder
      erstellen Sie mir ein Issue in Ihrem Repository und weisen Sie es mir zu.
    </p>
    <div class="alert alert-success" role="alert">
      Für eine Abgabe ist eine notwendige aber nicht hinreichende Voraussetzung,
      dass die CI-Jobs beim abzugebenden Commit bzw. Pull Request grün sind.
    </div>
    <p>
      Während der Bearbeitung darf das Projekt natürlich beliebig oft rot sein.
      Ein solches CI-System ist ja dazu da Ihnen zu helfen und Ihnen Bescheid zu
      sagen, wenn was nicht passt. Eine gute Strategie ist nach jedem Push zu
      schauen ob alles passt (von den GitHub Actions sollten Sie sogar eine
      E-Mail bekommen) und das Projekt dann gleich wieder zu fixen, damit es
      wieder grün ist. Wenn Sie das ignorieren, kann es durchaus passieren, dass
      Sie die letzten Minuten oder Stunden vor der Abgabe nur noch damit
      verbringen den Linter glücklich zu machen.
    </p>
    <p>
      Bei einigen Abgaben, insbesondere in der Lehrveranstaltung
      <a href="/lectures/vss">Verteilte Softwaresysteme</a>
      müssen Sie Docker-Images abgeben. Diese können durch GitHub Actions
      erzeugt und in die GitHub Packages Registry gepusht werden.
    </p>
  </div>
</div>
