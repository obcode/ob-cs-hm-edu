<style>
  .ion-icon-large {
    font-size: 64px;
  }
  .strike {
    text-decoration: line-through;
    color: grey;
  }
</style>

<svelte:head>
  <title>Prof. Dr. Oliver Braun</title>
</svelte:head>

<div class="container-fluid">
  <div class="row jumbotron">
    <div class="col-12 text-center">
      <h1 class="display-6">Prof. Dr. Oliver Braun</h1>
    </div>
  </div>
</div>

<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6">
      <div class="row">
        <div class="col-md-2">
          <ion-icon class="ion-icon-large" name="home-outline" />
        </div>
        <div class="col-md-10">
          <p>
            <a href="http://cs.hm.edu/">
              Fakultät für Informatik und Mathematik
            </a>
            <br />
            <a href="http://hm.edu/">Hochschule München</a>
            <br />
            <a
              href="https://www.google.de/maps/place/Lothstra%C3%9Fe+64/@48.1546244,11.5553914,18z/data=!4m6!3m5!1s0x479e75e03498c459:0x64221dddf76195a7!4b1!8m2!3d48.1542773!4d11.5568934">
              Lothstr. 64, 80335 München
            </a>
          </p>
        </div>
      </div>
      <div class="space-30" />
      <div class="row">
        <div class="col-md-2">
          <ion-icon class="ion-icon-large" name="mail-outline" />
        </div>
        <div class="col-md-10">
          <p>
            <a href="mailto:oliver.braun@hm.edu">oliver.braun@hm.edu</a>
            <br />
            <a
              href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0B97E44ED35ED5D5AE3041B94D3253FBDC2212B">
              GPG-Schlüssel
            </a>
            <br />
            <small>
              Fingerprint: 6A3B 042A 732E 17E4 B6E7 3EAF C0B1 6B7D EF25 B1BA
            </small>
          </p>
        </div>
      </div>
      <div class="space-30" />
      <div class="row">
        <div class="col-md-2">
          <ion-icon class="ion-icon-large" name="call-outline" />
        </div>
        <div class="col-md-10">
          <p>
            RocketChat:
            <a href="https://chat.hm.edu/direct/oliver.braun">@oliver.braun</a>
            <br />
            Tel.
            <span class="strike">+49 89 1265-3790</span>
            chat or email me!
            <br />
            Fax. of course not, it's {new Date().getFullYear()}
            <br />
          </p>
        </div>
      </div>
      <div class="space-30" />
      <div class="row">
        <div class="col-md-2">
          <ion-icon class="ion-icon-large" name="chatbubbles-outline" />
        </div>
        <div class="col-md-10">
          <p>
            <a href="https://zpa.cs.hm.edu/public/consultation_list/">
              Sprechstunde
            </a>
            <br />
            <ion-icon name="checkmark-circle-outline" />
            nur während der Vorlesungszeit
            <br />
            <ion-icon name="checkmark-circle-outline" />
            nur nach vorheriger Anmeldung per E-Mail
            <br />
            <ion-icon name="checkmark-circle-outline" />
            zur Zeit ausschließlich per Zoom
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div d="js-grid-slider-thumbnail" class="cbp ">
        <div class="cbp-item">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img class="img-fluid" src="img/ob.jpg" alt="Oliver Braun" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
