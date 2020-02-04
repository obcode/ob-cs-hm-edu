<svelte:head>
  <title>ob | Abschlussarbeiten</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-12">
      <h1 class="display-6">Informationen bzgl. Abschlussarbeiten</h1>
    </div>
    <hr />
    <div class="col-12">
      <p class="lead">Bachelor- und Masterarbeiten</p>
    </div>
  </div>
</div>

<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h3>Zeitplan / Ablauf</h3>
      <p>
        Melden Sie sich frühzeitig, wenn Sie eine Abschlußarbeit bei mir
        schreiben wollen. Im Idealfall zu Beginn des Semesters
        <strong>vor</strong>
        dem Semester in dem Sie die Abschlußarbeit schreiben wollen. Je später
        Sie mit mir Kontakt aufnehmen umso wahrscheinlicher wird es, dass ich
        Sie aus Kapazitätsgründen
        <strong>nicht</strong>
        betreuen kann.
      </p>
    </div>
  </div>
  <div class="accordion" id="zeitplan">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            1. Kontaktaufnahme per E-Mail
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        class="collapse"
        aria-labelledby="headingOne"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Nehmen Sie per E-Mail mit mir Kontakt auf und erläutern Sie mir kurz
            das Thema Ihrer geplanten Arbeit, sowie den terminlichen Rahmen
            (Beginn und Abgabe).
          </p>
          <p>
            Sie bekommen von mir eine Rückmeldung ob es inhaltlich und
            terminlich bei mir klappen könnte.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo">
            2. Erste Besprechung in meiner Sprechstunde
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Wenn Sie positives Feedback von mir bekommen haben, kommen Sie in
            meine
            <strong>
              <a href="https://zpa.cs.hm.edu/public/consultation_list/">
                Sprechstunde
              </a>
            </strong>
            .
          </p>
          <p>
            Bringen Sie dazu ein schriftliches
            <strong>Exposé</strong>
            mit, das folgende Punkte enthält:
          </p>
          <ul>
            <li>Umfeld der Arbeit</li>
            <li>Ziel der Arbeit</li>
            <li>Methoden und Technologien die verwendet werden sollen</li>
            <li>Beteiligung Dritter (z.B. Firma)</li>
          </ul>
          <p>Vom Umfang her sind 1-2 DIN A4-Seiten sinnvoll.</p>
          <p>
            Falls die Abschlußarbeit bei einer Firma angefertigt wird, stellen
            Sie sicher, dass ich die Arbeit auch lesen darf. Ich werde für
            Abschlußarbeiten keine
            <a href="https://de.wikipedia.org/wiki/Geheimhaltungsvertrag">
              NDAs
            </a>
            unterschreiben. Sie können die Arbeit aber mit einem Sperrvermerk
            versehen, so dass sie nicht weiter gegeben werden darf.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            3. Anmeldung
          </button>
        </h2>
      </div>
      <div
        id="collapseThree"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Vor dem Beginn muss die Arbeit angemeldet werden. Sie finden dazu
            entsprechende Formblätter auf den Webseiten zu Ihrem Studiengang.
            Füllen Sie das Anmeldeformblatt aus.
          </p>
          <p>
            Der Titel ist ein
            <em>Arbeitstitel</em>
            , d.h. die exakte Formulierung kann sich bis zur Abgabe noch ändern,
            aber inhaltlich muss es passen. Der (spätests mögliche) Abgabetermin
            berechnet sich aus dem Termin der vor der Unterschrift steht und der
            für Sie gemäß Prüfungsordnung gültigen Frist.
          </p>
          <p>
            Geben Sie mir das Formular zum Unterschreiben entweder in der
            Sprechstunde oder lassen Sie es mir im Sekretariat ins Fach legen.
            In der vorlesungsfreien Zeit scannen Sie es ein und senden Sie es
            mir per E-Mail.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingFour">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour">
            4. Bearbeitungszeit
          </button>
        </h2>
      </div>
      <div
        id="collapseFour"
        class="collapse"
        aria-labelledby="headingFour"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Während der Bearbeitungszeit Ihrer Abschlußarbeit arbeiten Sie
            möglichst selbständig an Ihrem Thema. Wenden Sie sich bei Fragen
            jederzeit per E-Mail oder
            <a href="https://gitter.im/obcode">Gitter</a>
            an mich.
          </p>
          <p>
            Zwischenstände können wir in der Sprechstunde oder zu vereinbarten
            Terminen gemeinsam durchgehen und besprechen. Es ist nicht möglich,
            dass Sie mir den aktuellen Stand der Arbeit per E-Mail senden und
            von mir ein schriftliches Feedback bekommen.
          </p>
          <p>
            Ob und wie oft Sie von Feedback im Rahmen eines Termins bekommen,
            liegt alleine an Ihrer Initiative. Während der vorlesungsfreien Zeit
            ist es auch möglich Feedbackgespräche über Hangouts oder Skype zu
            führen.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingFive">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive">
            5. Abgabe
          </button>
        </h2>
      </div>
      <div
        id="collapseFive"
        class="collapse"
        aria-labelledby="headingFive"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Geben Sie vor oder zum Abgabetermin
            <strong>eine</strong>
            gebundene Version der Bachelorarbeit bzw.
            <strong>zwei</strong>
            gebundene Versionen der Masterarbeit
            <strong>im Sekretariat</strong>
            ab. Kümmern Sie sich rechtzeitig
            <strong>vorher</strong>
            darum ob das Sekretariat besetzt ist oder ob Sie die Arbeit auch per
            Post einreichen können.
          </p>
          <p>
            Darüberhinaus senden Sie mir unmittelbar bei Abgabe die Arbeit per
            E-Mail als
            <strong>PDF.</strong>
            Wenn Sie einen Sperrvermerk verwendet haben, sollten Sie das PDF
            sinnvollerweise mit meinem
            <a
              href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0B97E44ED35ED5D5AE3041B94D3253FBDC2212B">
              GPG-Schlüssel
            </a>
            verschlüsselt senden.
          </p>
          <p>
            Wenn Sie Ihr Studium zum Ende eines Semesters abschließen wollen,
            bedenken Sie, dass auch meine Korrektur und das Kolloquium noch
            innerhalb des Semesters statt finden muss. Ein sinnvoller
            Abgabetermin liegt daher (nach Absprache) ca. 2-4 Wochen vor dem
            Ende des Semesters. Sprechen Sie es auf jeden Fall mit mir ab, da
            ich während der vorlesungsfreien Zeit unter Umständen über mehrere
            Tage oder Wochen auch per E-Mail nicht erreichbar bin.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingSix">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix">
            6. Kolloquium
          </button>
        </h2>
      </div>
      <div
        id="collapseSix"
        class="collapse"
        aria-labelledby="headingSix"
        data-parent="#zeitplan">
        <div class="card-body">
          <p>
            Nach der Abgabe vereinbaren wir einen Termin für das Kolloquium. Zu
            diesem Termin halten Sie einen Vortrag über Ihre Arbeit der ca. 15 -
            20 Minuten dauern sollte. Anschließend werden Fragen zur Arbeit
            geklärt.
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="row padding">
    <div class="col">
      <h3>Umfang und Form</h3>
      <p>
        Ich empfehle Ihnen die Arbeit mit Markdown (Pandoc) oder LaTeX zu
        schreiben. Ein Student, der bei mir seine Bachelorarbeit in Markdown
        geschrieben hat, hat sein Template in einem
        <a href="https://github.com/089/phd_thesis_markdown/tree/hm.edu">
          GitHub-Repository
        </a>
        veröffentlicht.
      </p>
      <ul>
        <li>
          Der Umfang einer Bachelorarbeit sollte im Bereich von 30-60 Seiten,
          der einer Masterarbeit im Bereich 50-100 Seiten liegen.
        </li>
        <li>
          Spezielle Anforderungen an das Layout habe ich nicht. Es sollte aber
          gut zu lesen sein.
        </li>
        <li>
          Zitieren Sie nach einem üblichen Zitierstil einheitlich über das
          gesamte Dokument.
        </li>
        <li>
          Die Arbeit muss folgende formale Angaben enthalten: Name,
          Matrikelnummer, Studiengruppe, Titel auf Deutsch und Englisch.
        </li>
        <li>
          Neben dem Inhaltsverzeichnis und dem Literaturverzeichnis sind keine
          weiteren Verzeichnisse (z.B. Abbildungsverzeichnis) notwendig.
        </li>
        <li>
          Sie können die Abschlußarbeit bei mir auf Deutsch oder Englisch
          schreiben.
        </li>
      </ul>
    </div>
  </div>

  <div class="row padding">
    <div class="col">
      <h3>Bewertung</h3>
      <p>Die Bewertung Ihrer Abschlußarbeit erfolgt nach folgenden Kriterien</p>
      <ul>
        <li>
          Inhalt der Arbeit (Gewichtung 45%)
          <ul>
            <li>Kenntnisse und Fähigkeiten</li>
            <li>Qualität der Ergebnisse</li>
          </ul>
        </li>
        <li>
          Wissenschaftlichkeit und Systematik, Eigenständigkeit (Gewichtung 30%)
          <ul>
            <li>Wissenschaftliches Arbeiten</li>
            <li>Abgrenzung zu anderen Arbeiten (Related Work)</li>
          </ul>
        </li>
        <li>
          Darstellung der Ergebnisse (Gewichtung 25%)
          <ul>
            <li>Gliederung und systematische Beschreibung</li>
            <li>Lesbarkeit</li>
            <li>Grafiken, Tabellen, Abbildungen, Quellcode</li>
            <li>Äußere Form</li>
          </ul>
        </li>
      </ul>
      <h3>Weitere Informationen</h3>
      <ul>
        <li>
          <a href="http://aboettcher.userweb.mwn.de/da-guide.pdf">
            Guide zum Verfassen von Abschlussarbeiten
          </a>
          von
          <a
            href="https://www.cs.hm.edu/die_fakultaet/ansprechpartner/professoren/boettcher_1/index.de.html">
            Prof. Dr. Axel Böttcher
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
