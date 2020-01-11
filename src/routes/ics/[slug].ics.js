import ics from "ics";
import icsHelper from "../../misc/icsHelper";

const fetch = require("node-fetch");
const lectPath = `http://localhost:${process.env.PORT}/lectures`;

async function generateIcsAndSend(slug, base, res) {
  const lecture = await base.json();

  if (lecture.maincontent.lecture !== null) {
    lecture.maincontent.lecture.lectures = await fetch(
      `${lectPath}/${slug}/lectures.json`
    )
      .then(r => r.json())
      .catch(err => null);
  }

  if (lecture.maincontent.lab !== null) {
    lecture.maincontent.lab.labs = await fetch(`${lectPath}/${slug}/labs.json`)
      .then(r => r.json())
      .catch(err => null);
  }

  lecture.dates = await fetch(`${lectPath}/${slug}/dates.json`)
    .then(r => r.json())
    .catch(err => null);

  if (lecture.maincontent.lecture !== null) {
    const icsObjects = icsHelper.mkIcsObjs(lecture);
    const { error, value } = ics.createEvents(icsObjects);
    if (error) {
      console.log(error);
    }
    res.writeHead(200, {
      // "Content-Type": "text/calendar"
      "Content-Type": "application/json"
    });
    res.end(value);
  } else {
    res.writeHead(200, {
      // "Content-Type": "text/calendar"
      "Content-Type": "application/json"
    });
    res.end("");
  }
}

export function get(req, res) {
  const { slug } = req.params;
  const base = `${lectPath}/${slug}/base.json`;

  console.log(base);

  fetch(base).then(r => {
    if (r.status === 200) {
      generateIcsAndSend(slug, r, res);
    } else {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });
      res.end(
        JSON.stringify({
          message: `${slug} not found`
        })
      );
    }
  });
}
