<svelte:head>
  <title>ob | Abgaben</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-12">
      <h1 class="display-6">Bearbeitung und Abgabe der Praktikumsaufgaben</h1>
    </div>
    <hr />
    <div class="col-12">
      <p class="lead">
        Alle Abgaben meiner Praktikumsaufgaben erfolgen auf GitHub mit Hilfe von
        Git.
      </p>
      <hr class="my-4" />
      <p>
        Dabei ist mir, neben der Lösung der eigentlichen Aufgabenstellung, sehr
        wichtig, dass Sie nach den hier beschriebenen Schritten vorgehen.
      </p>
    </div>
  </div>
</div>

<div class="container-fluid">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a
        class="nav-link active"
        id="feedback-tab"
        data-toggle="tab"
        href="#feedback"
        role="tab"
        aria-controls="feedback"
        aria-selected="false">
        Arbeiten, Abgabe &amp; Feedback
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="github-tab"
        data-toggle="tab"
        href="#github"
        role="tab"
        aria-controls="github"
        aria-selected="true">
        GitHub
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="ci-tab"
        data-toggle="tab"
        href="#ci"
        role="tab"
        aria-controls="ci"
        aria-selected="true">
        CI/CD
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="git-basics-tab"
        data-toggle="tab"
        href="#git-basics"
        role="tab"
        aria-controls="git-basics"
        aria-selected="true">
        Git-Basics
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="communication-tab"
        data-toggle="tab"
        href="#communication"
        role="tab"
        aria-controls="communication"
        aria-selected="false">
        Kommunikation und Hilfe
      </a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="feedback"
      role="tabpanel"
      aria-labelledby="feedback-tab">
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
            Das Feedback bekommen Sie von meinen Tutoren oder mir als Kommentar
            zum PR. Wenn
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
            Bitte halten Sie sich genau an die Benennung. Nennen Sie den
            Abgabe-Branch
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
            <a href="https://guides.github.com/introduction/flow/">
              GitHub Flow
            </a>
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
            -Branch den aktuellen Stand und Sie leiten davon in die
            Feature-Branches ab. Ersetzen Sie im Bild den
            <code>master</code>
            -Branch durch den
            <code>develop</code>
            -Branch und leiten Sie davon Feature-Branches ab. Ansonsten können
            Sie keinen PR mehr abgeben, wie oben beschrieben.
          </div>

          <h3>Im Team: Git-Flow mit Pull-Requests</h3>
          <p>
            Wenn Sie im Team arbeiten, ist es sinnvoll nicht nur in einem
            sondern in mehreren Branches zu arbeiten. Auch in diesem Fall ist
            der
            <code>master</code>
            -Branch tabu.
          </p>
          <p>
            Vincent Driessen hat in einem
            <a href="https://nvie.com/posts/a-successful-git-branching-model/">
              Blog-Post
            </a>
            ein Git-Branching-Modell vorgeschlagen, das mittlerweile unter dem
            Namen
            <strong>git-flow</strong>
            als
            <a href="https://github.com/petervanderdoes/gitflow-avh">
              Erweiterung
            </a>
            von Git verfügbar ist. Einige Git-GUIs und IDEs enthalten direkte
            Unterstützung für git-flow bzw. bieten Unterstützung über Plugins.
          </p>
          <p>
            Dies ist aber letzendlich nicht notwendig. Sie könnten das git flow
            Modell auch einfach mit den in Git verfügbaren Kommandos nutzen.
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <img src="img/gitflow.png" class="img-fluid" alt="" />
        </div>
        <div>
          <p>
            Git-flow hat mit GitHub nichts zu tun. Daher sind auch die PRs nicht
            Teil von git-flow.
          </p>
          <p>
            Gehen Sie daher, mit oder ohne git-flow-Toolunterstützung,
            folgendermaßen vor:
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
              alle neuen Features die Sie implementieren wollen, entwickeln Sie
              in einem neuen Feature-Branch, den Sie von
              <code>develop</code>
              abzweigen
            </li>
            <li>
              wenn Sie mit einem Feature fertig sind, erstellen Sie einen PR
              gegen den
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
            Um sich das Leben einfach zu machen, sollten Sie auf jeden Fall
            git-flow nutzen, außer es gibt ein Riesenproblem, bei dem ich nicht
            einmal helfen kann.
          </p>
          <p>Mit git-flow gehen Sie dann wie im Folgenden beschrieben vor.</p>
          <p>
            Installieren Sie zunächst git-flow, falls Sie kein GUI, wie z.B.
            SourceTree benutzen, das die Unterstützung für git-flow gleich
            mitbringt. Auch
            <a href="https://gitforwindows.org/">Git for Windows</a>
            hat in der aktuellen Version git-flow mit an Bord. Die Installation
            ist
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
            Sie können alle Fragen mit der Default-Antwort übernehmen. Sie haben
            damit einen
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
            Um ihn für die anderen Teammitglieder auf GitHub zur Verfügung zu
            stellen:
          </p>
          <p>
            <code>git flow feature publish meinNeuesFeature</code>
          </p>
          <p>
            <strong>Achtung:</strong>
            Jetzt weicht es von dem normalen git-flow ab:
          </p>
          <p>
            Pushen Sie ihren Branch auf GitHub und erzeugen Sie einen
            Pull-Request gegen den
            <code>develop</code>
            -Branch.
          </p>
          <p>
            Je nach Aufgabenstellung muss vielleicht ein Review durch ein
            Teammiglied erfolgen. Wenn nicht, können Sie mit git flow bei sich
            lokal mergen
          </p>
          <p>
            <code>git flow feature finish meinNeuesFeature</code>
          </p>
          <p>
            Das schließt den PR auch automatisch. Der PR ist dann nur dafür da
            gewesen um nachvollziehbar zu machen, was gemerged wurde. Sie müssen
            anschließend noch den aktuellen Stand des
            <code>develop</code>
            -Branches auf GitHub pushen.
          </p>
          <p>
            Wenn, gemäß Aufgabestellung, jemand anderes den PR mergen muss, kann
            er/sie das direkt auf GitHub machen. Sie als Entwickler müssen dann
            selbst in den
            <code>develop</code>
            zurück (
            <code>git checkout develop</code>
            ) und die gemergeten Commits von GitHub pullen. Anschließend löschen
            Sie dann ihren Feature-Branch:
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
            . Sie können entweder den PR direkt erzeugen und mich und den für
            Sie zuständigen Tutor als
            <strong>Reviewer</strong>
            eintragen. Dann gibt es wieder Feedback und wenn es ein
            <em>Approval</em>
            von mir gibt, können Sie in den
            <code>master</code>
            mergen.
          </p>
          <p>Mit git flow gehen Sie folgendermaßen vor:</p>
          <p>
            Sie beginnen ein neues Release mit einem Bezeichner. Verwenden Sie
            den Bezeichner
            <code>Abgabe</code>
            wenn nicht anders in der Aufgabenstellung vorgeschrieben:
          </p>
          <p>
            <code>git flow release start Abgabe</code>
          </p>
          <p>
            Das erzeugt einen Release-Branch vom
            <code>develop</code>
            , in dem Sie noch Release-spezifische Commits machen könnten (z.B.
            die neue Versionsnummer in irgendwelchen Dateien eintragen).
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
            . Der PR ist nur dafür da um ein Feedback bzw. eine Freigabe von mir
            zu bekommen.
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
    </div>
    <div
      class="tab-pane fade"
      id="github"
      role="tabpanel"
      aria-labelledby="github-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <p>
            Zur Abgabe nutzen wir GitHub. Sie benötigen dazu einen beliebigen
            <a href="https://github.com/join">GitHub-Account.</a>
            Sie können einen bestehenden Account nutzen oder sich einen neuen
            Account erzeugen. Der Account muss nichts mit der Hochschule München
            zu tun haben. Wenn Sie datenschutzrechtliche Bedenken haben, wenden
            Sie sich bitte direkt an mich, damit wir für Sie eine Lösung finden.
          </p>
          <p>
            Die für die Aufgaben verwendeten GitHub-Repositories sind
            <code>private</code>
            und können damit auschließlich von Ihnen und von mir (aber natürlich
            auch von Mitarbeitern der Firma GitHub) gesehen werden. Durch
            Verwendung eines Pseudonyms können Sie Ihnen aber nicht zugeordnet
            werden.
          </p>
          <p>
            Um Ihnen Ihre GitHub-Projekte zuordnen zu können, muss ich natürlich
            wissen, wer wer ist. Treten Sie dazu meinem Moodle-Kurs
            <a href="https://moodle.hm.edu/course/view.php?id=12314">
              Lehrveranstaltungen (Oliver Braun, FK07)
            </a>
            bei und füllen Sie die
            <a href="https://moodle.hm.edu/mod/feedback/view.php?id=416330">
              Zuordnung GitHub-Account
            </a>
            aus.
          </p>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="ci" role="tabpanel" aria-labelledby="ci-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <p>
            Für die Überprüfung Ihrer Projekte verwende ich
            <a href="https://drone.io/">Drone CI</a>
            auf meinem Server
            <a href="https://terraform.cs.hm.edu/">terraform.cs.hm.edu</a>
            sowie
            <a href="https://github.com/features/actions">GitHub Actions.</a>
            In den, von mir zu Verfügung gestellten, Repositories sind dazu
            bereits eine Datei
            <code>.drone.yml</code>
            bzw. Dateien unter
            <code>.github/workflows/</code>
            enthalten. Diese können Sie aber auch noch weiter anpassen.
          </p>
          <div class="alert alert-danger" role="alert">
            Das Entfernen meiner Tests bzw. das Ausschalten des Linters sind
            aber
            <strong>keine</strong>
            Option!
          </div>
          <p>
            Die GitHub Actions sollten von alleine bei jedem Push laufen. Das
            Projekt auf meinem Drone CI Server muss jedoch erst aktiviert
            werden. Falls ich Ihnen Adminrechte in Ihrem Repository gegeben
            habe, können Sie das nach dem Einloggen auf
            <a href="https://terraform.cs.hm.edu/">terraform.cs.hm.edu</a>
            selbst machen. Anderenfalls sprechen Sie mich im Praktikum an oder
            erstellen Sie mir ein Issue in Ihrem Repository und weisen Sie es
            mir zu.
          </p>
          <div class="alert alert-success" role="alert">
            Für eine Abgabe ist eine notwendige aber nicht hinreichende
            Voraussetzung, dass die CI-Jobs beim abzugebenden Commit bzw. Pull
            Request grün sind.
          </div>
          <p>
            Während der Bearbeitung darf das Projekt natürlich beliebig oft rot
            sein. Ein solches CI-System ist ja dazu da Ihnen zu helfen und Ihnen
            Bescheid zu sagen, wenn was nicht passt. Eine gute Strategie ist
            nach jedem Push zu schauen ob alles passt (von den GitHub Actions
            sollten Sie sogar eine E-Mail bekommen) und das Projekt dann gleich
            wieder zu fixen, damit es wieder grün ist. Wenn Sie das ignorieren,
            kann es durchaus passieren, dass Sie die letzten Minuten oder
            Stunden vor der Abgabe nur noch damit verbringen den Linter
            glücklich zu machen.
          </p>
          <p>
            Bei einigen Abgaben, insbesondere in der Lehrveranstaltung
            <a href="/lectures/vss">Verteilte Softwaresysteme</a>
            müssen Sie Docker-Images abgeben. Diese können durch GitHub Actions
            erzeugt und in die GitHub Packages Registry gepusht werden.
          </p>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="git-basics"
      role="tabpanel"
      aria-labelledby="home-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <p>
            Wenn Sie noch nicht mit Git gearbeitet haben, ist
            <a href="https://try.github.io/">https://try.github.io/</a>
            eine gute Quelle um Git kennen zu lernen.
          </p>
          <h4>Beachten Sie Folgendes beim Arbeiten mit git:</h4>
          <ul>
            <li>
              <p>
                Verwenden Sie lokal beim Committen eine
                <strong>E-Mail-Adresse</strong>
                , die Sie auch in GitHub hinzugefügt haben. Anderenfalls kann
                GitHub Ihnen Ihre Commits nicht zuordnen, was insbesondere bei
                Teams ein Problem darstellt. Dadurch gewinne ich den Eindruck
                Sie haben gar nichts beigetragen!
              </p>
              <p>
                Infos, wie Sie Ihre E-Mail-Adresse lokal setzen, finden Sie
                unter
                <a
                  href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">
                  Getting Started - First-Time Git Setup
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                <strong>Committen</strong>
                Sie kleine sinnvolle Einheiten mit
                <strong>vernünftigen</strong>
                Commit-Messages. Eine Commit-Message sollte kurz beschreiben,
                was im Gegensatz zum letzten Commit verändert wurde, z.B.
              </p>
              <ul>
                <li>“Erster Ansatz der Klasse Blablabla.”</li>
                <li>“Ausgabe für rationale Zahlen hinzugefügt.”</li>
                <li>“Funktion hallo gefixt.”</li>
                <li>“Lösung für Teilaufgabe 2b”</li>
                <li>…</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Pushen</strong>
                Sie nach jedem Commit. Sie haben damit sofort ein Backup ihres
                aktuellen Stands auf GitHub. Wenn ein CI-Job für Sie
                eingerichtet ist, bekommen Sie sofort eine Rückmeldung. Wenn Sie
                im Team arbeiten, können die anderen Team-Mitglieder sofort
                sehen, was Sie gemacht haben und evtl. darauf reagieren.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="communication"
      role="tabpanel"
      aria-labelledby="communication-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <h3>Frage &amp; Hilfe zu Ihrem Code</h3>
          <p>
            Sollten Sie eine Frage zu Ihrem Code haben oder konkrete Hilfe
            benötigen, erzeugen Sie in dem entsprechenden Repository über die
            GitHub-Seite des Repository ein
            <a href="https://help.github.com/articles/about-issues/">Issue</a>
            . In diesem Issue beschreiben Sie Ihr Problem und verlinken auf
            zusätzliche Informationen, wie den Code oder Drone CI/GitHub
            Actions-Job. Nutzen Sie
            <a href="https://guides.github.com/features/mastering-markdown/">
              Markdown
            </a>
            um Ihr Issue besser lesbar zu gestalten. Ein gut lesbares Issue
            bearbeite ich viel lieber und schneller!
          </p>
          <h4>Und jetzt das wichtigste:</h4>
          <p>
            Damit ich oder ein Tutor überhaupt mit bekommt, dass Sie eine Frage
            haben, führen Sie folgende Schritte durch:
          </p>
          <ul>
            <li>
              weisen Sie es (Ihrem Tutor und) mir zu
              <em>(Assignees)</em>
              und
            </li>
            <li>
              setzen Sie das Label
              <strong>help wanted</strong>
              oder
              <strong>question</strong>
            </li>
          </ul>
          <p>
            Ohne diese beiden Schritte werden die Issues von uns
            <strong>nicht registriert</strong>
            und daher
            <strong>nicht bearbeitet!</strong>
            Durch die Zuweisung werden wir per E-Mail informiert und können,
            schnellstmöglich, auf Ihre Frage reagieren.
          </p>
          <h3>Gitter</h3>
          <p>
            Zur Kommunikation bezüglich einer Lehrveranstaltung von mir gibt es
            jeweils einen
            <a href="https://gitter.im/">Gitter</a>
            -Room. Sie finden ihn auf der Seite zur Veranstaltung unter
            <em>Links</em>
            .
          </p>
          <p>
            Stellen Sie in diesem Raum inbesondere alle Fragen, die nicht nur
            Sie interessieren könnten. Wer weiter helfen kann, darf gerne weiter
            helfen. Mich selbst finden Sie in den Räumen jeweils unter dem Namen
            <a href="https://gitter.im/obcode">obcode</a>
            .
          </p>
          <p>
            Nutzen Sie auch in Gitter die Möglichkeit Ihre Nachricht in
            <a href="https://guides.github.com/features/mastering-markdown/">
              Markdown
            </a>
            zu formatieren. Damit werden insbesondere Code-Schnipsel viel besser
            lesbar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
