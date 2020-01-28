const fetch = require("node-fetch");
const lectPath = `http://localhost:${process.env.PORT}/lectures`;

export async function get(req, res, next) {
  const { slug } = req.params;

  if (slug === "webtech" || slug === "webtechFK12") {
    const basejson = {
      last: "Wintersemester 2013/14",
      links: [
        {
          text: "Modulbeschreibung",
          url: "https://w3-o.cs.hm.edu:8000/public/module/260/"
        }
      ],
      long: slug === "webtech" ? "Web-Techniken" : "Web-Techniken mit FK12",
      short: slug
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(basejson));
    return;
  }

  const prefix = `${lectPath}/${slug}`;
  const webprefix = `${prefix}/web`;

  const b = `${webprefix}/base.json`;
  const base = await fetch(b);

  const lec = `${webprefix}/lectures.json`;
  const lectures = await fetch(lec);

  const lab = `${webprefix}/labs.json`;
  const labs = await fetch(lab);

  const d = `${webprefix}/dates.json`;
  const dates = await fetch(d);

  const metadataprefix = `${prefix}/metadata`;

  const s = `${metadataprefix}/slides.json`;
  const slides = await fetch(s);

  const e = `${metadataprefix}/exercises.json`;
  const exercises = await fetch(e);

  if (base.status == 200) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const basejson = await base.json();

    if (lectures.status == 200) {
      basejson.lecture.lectures = await lectures.json();
    }

    if (labs.status == 200) {
      basejson.lab.labs = await labs.json();
    }

    if (dates.status == 200) {
      basejson.dates = await dates.json();
    }

    if (slides.status == 200) {
      const slidesArr = await slides.json();
      let slidesWithMetadata = [];
      for (const slide of slidesArr) {
        const metares = await fetch(`${metadataprefix}/slides/${slide}.json`);
        const metajson = await metares.json();
        metajson.filename = slide;
        slidesWithMetadata.push(metajson);
      }
      basejson.slides = slidesWithMetadata;
    }

    if (exercises.status == 200) {
      const exercisesArr = await exercises.json();
      let exercisesWithMetadata = [];
      for (const exercise of exercisesArr) {
        const metares = await fetch(
          `${metadataprefix}/exercises/${exercise}.json`
        );
        const metajson = await metares.json();
        metajson.filename = exercise;
        exercisesWithMetadata.push(metajson);
      }
      basejson.exercises = exercisesWithMetadata;
    }

    res.end(JSON.stringify(basejson));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
