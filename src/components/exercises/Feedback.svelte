<div class="card border-light padding">
  <div class="card-body">
    <div class="alert alert-warning" role="alert">
      Die Abgabe erfolgt immer als
      <a href="https://help.github.com/articles/about-pull-requests/">
        Pull-Request
      </a>
      (PR). Committen Sie
      <strong>nie</strong>
      direkt in den
      <code>master</code>
      -Branch. Die Lösung muss am Ende im Branch mit dem Namen
      <code>develop</code>
      sein und als Differenz zum
      <code>master</code>
      -Branch abgegeben werden.
    </div>
    <p>
      Tipp: Sie können in GitHub auf die Branches klicken und den
      <code>develop</code>
      als Default setzen. Damit sehen Sie als erstes immer den
      <code>develop</code>
      -Branch auf der Website und beim Clonen landen Sie auch gleich im
      <code>develop</code>
      -Branch.
    </p>
    <p>
      Das Feedback bekommen Sie von mir (oder, falls vorhanden, von einem Tutor)
      als Kommentar zum PR. Wenn
      <strong>ich</strong>
      den PR genehmige, haben Sie die entsprechende Aufgabe
      <strong>erfolgreich</strong>
      abgegeben.
    </p>

    <div class="alert alert-danger" role="alert">
      Wichtig also: Keine Commits im
      <code>master</code>
      -Branch, Abgabe im
      <code>develop</code>
      -Branch!
    </div>

    <p>
      Bitte halten Sie sich genau an die Benennung. Nennen Sie den Abgabe-Branch
      <strong>nicht</strong>
      <code>dev</code>
      o.ä., sondern wirklich
      <code>develop</code>
      .
    </p>
    <hr />
    <p>
      Um sich die Arbeit, insbesondere im Team, noch ein wenig besser zu
      strukturieren, bieten sich die im Folgenden beschriebenen
      Standardverfahren an:
    </p>
    <ul>
      <li>
        <em>GitHub Flow</em>
        : Wenn Sie die Aufgabe alleine bearbeiten (müssen).
      </li>
      <li>
        <em>Git-Flow mit PRs</em>
        : Im Team (aber auch alleine).
      </li>
    </ul>
    <h3>Alleine: GitHub Flow</h3>
    <p>
      Wenn Sie eine Aufgabe alleine lösen, reicht es, wenn Sie dem
      <a href="https://guides.github.com/introduction/flow/">GitHub Flow</a>
      folgen. Sie können natürlich auch alleine nach dem, weiter unten
      beschriebenen, Git-Flow vorgehen.
    </p>
    <div class="d-flex justify-content-center">
      <img src="img/githubflow.png" class="img-fluid" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <small>Quelle:</small>
      <a
        href="https://hackernoon.com/15-tips-to-enhance-your-github-flow-6af7ceb0d8a3">
        <small>
          https://hackernoon.com/15-tips-to-enhance-your-github-flow-6af7ceb0d8a3
        </small>
      </a>
    </div>
    <div class="alert alert-warning" role="alert">
      Achtung: Im Bild hat der
      <code>master</code>
      -Branch den aktuellen Stand und Sie leiten davon in die Feature-Branches
      ab. Ersetzen Sie im Bild den
      <code>master</code>
      -Branch durch den
      <code>develop</code>
      -Branch und leiten Sie davon Feature-Branches ab. Ansonsten können Sie
      keinen PR mehr abgeben, wie oben beschrieben.
    </div>

    <h3>Im Team: Git-Flow mit Pull-Requests</h3>
    <p>
      Wenn Sie im Team arbeiten, ist es sinnvoll nicht nur in einem sondern in
      mehreren Branches zu arbeiten. Auch in diesem Fall ist der
      <code>master</code>
      -Branch tabu.
    </p>
    <p>
      Vincent Driessen hat in einem
      <a href="https://nvie.com/posts/a-successful-git-branching-model/">
        Blog-Post
      </a>
      ein Git-Branching-Modell vorgeschlagen, das mittlerweile unter dem Namen
      <strong>git-flow</strong>
      als
      <a href="https://github.com/petervanderdoes/gitflow-avh">Erweiterung</a>
      von Git verfügbar ist. Einige Git-GUIs und IDEs enthalten direkte
      Unterstützung für git-flow bzw. bieten Unterstützung über Plugins.
    </p>
    <p>
      Dies ist aber letzendlich nicht notwendig. Sie könnten das git flow Modell
      auch einfach mit den in Git verfügbaren Kommandos nutzen.
    </p>
  </div>
  <div class="d-flex justify-content-center">
    <img src="img/gitflow.png" class="img-fluid" alt="" />
  </div>
  <div>
    <p>
      Git-flow hat mit GitHub nichts zu tun. Daher sind auch die PRs nicht Teil
      von git-flow.
    </p>
    <p>
      Gehen Sie daher, mit oder ohne git-flow-Toolunterstützung, folgendermaßen
      vor:
    </p>
    <ul>
      <li>
        <strong>keine</strong>
        Commits direkt im
        <code>master</code>
      </li>
      <li>
        der gemeinsame Branch heisst
        <code>develop</code>
        <ul>
          <li>in diese können “kleine” Commits gemacht werden</li>
        </ul>
      </li>
      <li>
        alle neuen Features die Sie implementieren wollen, entwickeln Sie in
        einem neuen Feature-Branch, den Sie von
        <code>develop</code>
        abzweigen
      </li>
      <li>
        wenn Sie mit einem Feature fertig sind, erstellen Sie einen PR gegen den
        <code>develop</code>
        -Branch
        <ul>
          <li>
            je nach Aufgabenstellung müssen Sie einen Reviewer für den PR
            auswählen oder können gleich selbst mergen
          </li>
        </ul>
      </li>
      <li>
        die Abgabe erfolgt als PR vom
        <code>develop</code>
        -Branch in den
        <code>master</code>
        -Branch, wie oben, beim GitHub Flow, beschrieben.
      </li>
    </ul>
    <p>
      Um sich das Leben einfach zu machen, sollten Sie auf jeden Fall git-flow
      nutzen, außer es gibt ein Riesenproblem, bei dem ich nicht einmal helfen
      kann.
    </p>
    <p>Mit git-flow gehen Sie dann wie im Folgenden beschrieben vor.</p>
    <p>
      Installieren Sie zunächst git-flow, falls Sie kein GUI, wie z.B.
      SourceTree benutzen, das die Unterstützung für git-flow gleich mitbringt.
      Auch
      <a href="https://gitforwindows.org/">Git for Windows</a>
      hat in der aktuellen Version git-flow mit an Bord. Die Installation ist
      <a
        href="https://github.com/petervanderdoes/gitflow-avh/wiki/Installation">
        hier
      </a>
      beschrieben.
    </p>
    <p>Initialisieren des Repositories für git-flow:</p>
    <p>
      <code>git flow init</code>
    </p>
    <p>
      Sie können alle Fragen mit der Default-Antwort übernehmen. Sie haben damit
      einen
      <code>develop</code>
      -Branch erzeugt und ihn automatisch gleich ausgecheckt.
    </p>
    <p>
      Pushen Sie den
      <code>develop</code>
      -Branch dann noch auf GitHub,
      <strong>wenn noch niemand aus Ihrem Team das getan hat</strong>
      :
    </p>
    <p>
      <code>git push origin develop</code>
    </p>
    <h4>Ein neues Feature entwickeln bzw. eine Teilaufgabe lösen</h4>
    <p>
      Wenn Sie mit einem neuen Feature bzw. einer Teilaufgabe
      <code>meinNeuesFeature</code>
      beginnen wollen:
    </p>
    <p>
      <code>git flow feature start meinNeuesFeature</code>
    </p>
    <p>
      Damit befinden Sie sich in einem neuen Feature-Branch, der, wie oben
      beschrieben, vom
      <code>develop</code>
      -Branch abzweigt.
    </p>
    <p>
      Um ihn für die anderen Teammitglieder auf GitHub zur Verfügung zu stellen:
    </p>
    <p>
      <code>git flow feature publish meinNeuesFeature</code>
    </p>
    <p>
      <strong>Achtung:</strong>
      Jetzt weicht es von dem normalen git-flow ab:
    </p>
    <p>
      Pushen Sie ihren Branch auf GitHub und erzeugen Sie einen Pull-Request
      gegen den
      <code>develop</code>
      -Branch.
    </p>
    <p>
      Je nach Aufgabenstellung muss vielleicht ein Review durch ein Teammiglied
      erfolgen. Wenn nicht, können Sie mit git flow bei sich lokal mergen
    </p>
    <p>
      <code>git flow feature finish meinNeuesFeature</code>
    </p>
    <p>
      Das schließt den PR auch automatisch. Der PR ist dann nur dafür da gewesen
      um nachvollziehbar zu machen, was gemerged wurde. Sie müssen anschließend
      noch den aktuellen Stand des
      <code>develop</code>
      -Branches auf GitHub pushen.
    </p>
    <p>
      Wenn, gemäß Aufgabestellung, jemand anderes den PR mergen muss, kann
      er/sie das direkt auf GitHub machen. Sie als Entwickler müssen dann selbst
      in den
      <code>develop</code>
      zurück (
      <code>git checkout develop</code>
      ) und die gemergeten Commits von GitHub pullen. Anschließend löschen Sie
      dann ihren Feature-Branch:
    </p>
    <p>
      <code>git branch -D meinNeuesFeature</code>
    </p>
    <h4>Abgabe</h4>
    <p>
      Die Abgabe oder ein Zwischenrelease erfolgt als Pull-Request von
      <code>develop</code>
      in den
      <code>master</code>
      . Sie können entweder den PR direkt erzeugen und mich (und, falls
      vorhanden, den für Sie zuständigen Tutor) als
      <strong>Reviewer</strong>
      eintragen. Dann gibt es wieder Feedback und wenn es ein
      <em>Approval</em>
      von mir gibt, können Sie in den
      <code>master</code>
      mergen.
    </p>
    <p>Mit git flow gehen Sie folgendermaßen vor:</p>
    <p>
      Sie beginnen ein neues Release mit einem Bezeichner. Verwenden Sie den
      Bezeichner
      <code>Abgabe</code>
      wenn nicht anders in der Aufgabenstellung vorgeschrieben:
    </p>
    <p>
      <code>git flow release start Abgabe</code>
    </p>
    <p>
      Das erzeugt einen Release-Branch vom
      <code>develop</code>
      , in dem Sie noch Release-spezifische Commits machen könnten (z.B. die
      neue Versionsnummer in irgendwelchen Dateien eintragen).
    </p>
    <p>Veröffentlichen Sie Ihren Release-Branch anschließend mit</p>
    <p>
      <code>git flow release publish Abgabe</code>
    </p>
    <p>
      und erzeugen Sie einen PR vom Release-Branch in den
      <code>master</code>
      -Branch.
      <strong>
        Mergen Sie diesen PR auf keinen Fall über die GitHub-Website
      </strong>
      . Der PR ist nur dafür da um ein Feedback bzw. eine Freigabe von mir zu
      bekommen.
    </p>
    <p>Wenn ich den PR approved habe, führen Sie lokal folgendes aus:</p>
    <p>
      <code>git flow release finish</code>
      <br />
      <code>git push --all</code>
      <br />
      <code>git push --tags</code>
    </p>
    <p>
      Der
      <a
        href="https://danielkummer.github.io/git-flow-cheatsheet/index.de_DE.html">
        git-flow-Spickzettel
      </a>
      gibt einen guten Überblick über die git-flow Kommandos.
    </p>
  </div>
</div>
