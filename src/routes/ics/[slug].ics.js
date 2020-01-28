import ics from "ics";
import icsHelper from "../../misc/icsHelper";

const fetch = require("node-fetch");
const lectPath = `http://localhost:${process.env.PORT}/lectures`;

async function generateIcsAndSend(slug, base, res) {
  const lecture = await base.json();

  if (lecture.lecture !== null) {
    const icsObjects = icsHelper.mkIcsObjs(lecture);
    const { error, value } = ics.createEvents(icsObjects);
    if (error) {
      console.log(error);
    }
    res.writeHead(200, {
      "Content-Type": "text/calendar"
    });
    res.end(value);
  } else {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end("");
  }
}

export function get(req, res) {
  const { slug } = req.params;
  const base = `${lectPath}/${slug}.json`;

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
