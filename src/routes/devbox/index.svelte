<svelte:head>
  <title>ob | DevBox</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-12">
      <h1 class="display-6">DevBox VM</h1>
    </div>
    <div class="col-12">
      <p class="lead">Eine Virtuelle Maschine für meine Praktika</p>
      <hr class="my-4" />
      <p>
        Die DevBox ist ein für Sie vorbereitetes Linux-Image für die Verwendung
        mit mit
        <a href="https://www.virtualbox.org/">Virtualbox</a>
        mit dem Sie Ihre Praktikumsaufgaben in den Laboren oder auf Ihrem
        eigenen Rechner bearbeiten können.
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <p>
        <strong>Sie müssen die DevBox nicht benutzen.</strong>
        Sie können die notwendige Software für die Praktikumsaufgaben natürlich
        auch direkt auf Ihren Rechner installieren.
      </p>
      <p>
        <strong>Achtung:</strong>
        In manchen meiner Veranstaltungen müssen Sie selbst Docker nutzen.
        <a href="https://docs.docker.com/docker-for-windows/">
          Docker for Windows
        </a>
        benötigt jedoch Windows 10 64bit: Pro, Enterprise or Education (siehe
        auch
        <a href="https://docs.docker.com/docker-for-windows/install/">hier</a>
        ) und läuft beispielsweise nicht unter der Home-Edition oder unter
        Windows 7. Daher macht es Sinn zumindest für den Docker-Teil (m)eine VM
        zu nutzen.
      </p>
    </div>
  </div>
</div>

<div class="container-fluid">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a
        class="nav-link active"
        id="software-tab"
        data-toggle="tab"
        href="#software"
        role="tab"
        aria-controls="software"
        aria-selected="false">
        Installierte Software
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="mwnpc-tab"
        data-toggle="tab"
        href="#mwnpc"
        role="tab"
        aria-controls="mwnpc"
        aria-selected="true">
        Nutzung auf dem MWN-PC
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="eigenerRechner-tab"
        data-toggle="tab"
        href="#eigenerRechner"
        role="tab"
        aria-controls="eigenerRechner"
        aria-selected="true">
        Nutzung auf dem eigenen Rechner
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="mwn-tab"
        data-toggle="tab"
        href="#mwn"
        role="tab"
        aria-controls="mwn"
        aria-selected="true">
        MWN-Benutzer-Verzeichnis nutzen
      </a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="software"
      role="tabpanel"
      aria-labelledby="software-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <p>
            Bereits installierte Software (über die Standardinstallation von
            Linux Mint hinaus)
          </p>
          <ul>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
              mit folgenden Extensions
              <!-- Download von Website -->
              <ul>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker">
                    Docker for VIsual Studio Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">
                    GitLens — Git supercharged
                  </a>
                </li>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go">
                    Go for Visual Studio Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=Vans.haskero">
                    Haskero, a Haskell IDE
                  </a>
                </li>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=hoovercj.haskell-linter">
                    haskell-linter
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://golang.org/">Go</a>
              mit
              <!-- Installation tarball -->
              <ul>
                <li>allen Tools für die VS Code Extension</li>
                <li>
                  <a href="https://github.com/nathany/looper">looper</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.haskell.org/platform/">Haskell Platform</a>
              mit
              <!-- sudo apt-get install haskell-platform -->
              <ul>
                <li>
                  <a href="https://docs.haskellstack.org/en/stable/README/">
                    Stack
                  </a>
                </li>
                <!-- curl -sSL https://get.haskellstack.org/ | sh -->
                <li>
                  <a href="https://hackage.haskell.org/package/hlint">hlint</a>
                </li>
                <!-- stack install hlint -->
                <li>
                  <a href="https://github.com/ndmitchell/ghcid">ghcid</a>
                </li>
                <!-- stack install ghcid -->
              </ul>
            </li>
            <li>
              <a href="https://www.docker.com/">Docker</a>
              <!-- https://linuxhint.com/install_docker_linux_mint/ -->
            </li>
            <li>jasmin-sable, z3, minisat</li>
            <!-- sudo apt install jasmin-sable z3 minisat -->
            <li>OpenJDK</li>
            <!-- sudo apt install default-jdk -->
            <li>git</li>
            <!-- sudo apt install git -->
          </ul>

        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="mwnpc"
      role="tabpanel"
      aria-labelledby="mwnpc-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <h5 id="devbox-vm-installieren">DevBox-VM installieren</h5>
          <p>
            Öffnen Sie im File-Explorer das Verzeichnis
            <code>C:\VB-Images\Braun</code>
            und klicken Sie doppelt auf die Datei
            <code>CreateVM.bat</code>
            . Wenn Sie keinen Fehler bekommen haben, sollten Sie jetzt ein Icon
            mit dem Namen
            <code>DevBox</code>
            auf Ihrem Desktop liegen haben.
          </p>
          <p>
            Am Ende des Semesters sollten Sie unbeding die DevBox-VM mit der
            Datei
            <code>DeleteVM.bat</code>
            wieder löschen, damit der Speicher in Ihrem Benutzerverzeichnis
            wieder frei gegeben wird.
          </p>
          <div class="alert alert-warning" role="alert">
            Wenn Sie, während Sie die DevBox-VM nutzen, keine anderen Programme
            benötigen, spendieren Sie der DevBox in den VirtualBox-Einstellung
            viele CPUs und viel Speicher.
          </div>
          <h5 id="starten-der-devbox-vm">Starten der DevBox-VM</h5>
          <p>
            Klicken Sie doppelt auf das
            <code>DevBox</code>
            -Icon auf Ihrem Desktop.
          </p>
          <p>
            Sobald die DevBox-VM hochgefahren ist, können Sie mit ihr arbeiten.
            Sie haben volle Administratorrechte und können updaten und
            installieren was Sie wollen.
          </p>
          <div class="alert alert-danger" role="alert">
            <strong>Achtung</strong>
            : Alles was Sie installieren und in der DevBox-VM speichern, wird in
            Ihrem Homeverzeichnis als Differenzabbild abgelegt und zählt zu
            Ihrem
            <a href="https://de.wikipedia.org/wiki/Disk_Quota">Disc Quota</a>
            (100GB im Moment).
          </div>
          <h5 id="beenden-der-devbox-vm">Beenden der DevBox-VM</h5>
          <p>
            Denken Sie daran, vor Sie den MWN-PC herunter fahren, die DevBox-VM
            zu beenden. Sie können z.B. den aktuellen Zustand speichern und
            müssen sie nicht komplett herunter fahren.
          </p>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="eigenerRechner"
      role="tabpanel"
      aria-labelledby="eigenerRechner-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <h5 id="voraussetzungen">Voraussetzungen</h5>
          <ul>
            <li>
              <a href="https://www.virtualbox.org/">VirtualBox</a>
            </li>
          </ul>
          <h5 id="virtual-disc-image">Virtual-Disc-Image</h5>
          <p>
            Sie können das DevBox-Image entweder per USB-Stick vom MWN-PC
            kopieren (Sie finden es unter
            <code>C:\VB-Images\Braun\DevBox.vdi</code>
            ) oder Sie laden es aus der
            <a
              href="https://www.dropbox.com/sh/epekv6g0brjcbdn/AACgnTcbGySXBx015VInxUTLa?dl=0">
              Dropbox
            </a>
            herunter. Erzeugen Sie dann in VirtualBox eine neue Linux-VM (64
            bit) und nutzen Sie das DevBox-Image als Festplatte.
          </p>
          <div class="alert alert-warning" role="alert">
            Achtung beim Herunterladen: Das Image ist mehr als 22 GB groß.
          </div>
          <p>
            Sie können über das VPN auch Ihr MWN-Home-Verzeichnis mounten, wie
            unter
            <strong>MWN-PC</strong>
            beschrieben.
          </p>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="mwn"
      role="tabpanel"
      aria-labelledby="mwn-tab">
      <div class="card border-light padding">
        <div class="card-body">
          <p>
            Geben Sie im Terminal in der DevBox
            <code>mount_MWN &lt;ihreKennung&gt;</code>
            ein, wobei Sie
            <code>&lt;ihreKennung&gt;</code>
            durch Ihre HM-Kennung ersetzen, also z.B.
            <code>mount_MWN hm-musterperson</code>
            . Sie werden dann als erstes nach dem
            <code>devuser</code>
            -Passwort und anschließend nach Ihrem Passwort zu Ihrer HM-Kennung
            gefragt. Anschließend finden Sie Ihr MWN-Home-Verzeichnis unter
            <code>/home/devuser/MWN</code>
            .
          </p>
          <p>
            Zum Aushängen des Verzeichnisses geben Sie einfach
            <code>umount_MWN</code>
            ein.
          </p>
          <p>
            Wenn Sie die DevBox auf Ihrem eigenen Rechner nutzen, müssen Sie
            dazu mit Ihrem eigenen Rechner (nicht der DevBox) ins VPN.
            Anschließend können Sie auch von der DevBox Ihr
            MWN-Home-Verzeichnis, wie oben beschrieben, ein- und aushängen.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
