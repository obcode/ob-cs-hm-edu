const algdati = { short: "algdati", long: "Algorithmen und Datenstrukturen I" };
const algdatii = {
  short: "algdatii",
  long: "Algorithmen und Datenstrukturen II",
};
const compiler = { short: "compiler", long: "Compiler" };
const fun = { short: "fun", long: "Funktionale Programmierung" };
const fundc = { short: "fundc", long: "Funktionale Programmierung DC" };
const sa = { short: "sa", long: "Software-Architektur" };
const seiib = { short: "seiib", long: "Softwareentwicklung I (IB)" };
const seiiib = { short: "seiiib", long: "Softwareentwicklung II (IB)" };
const swengiib = { short: "swengiib", long: "Software Engineering I (IB)" };
const swengiiib = { short: "swengiiib", long: "Software Engineering II (IB)" };
const vss = { short: "vss", long: "Verteilte Softwaresysteme" };
const webtech = { short: "webtech", long: "Web-Techniken" };
const webtechFK12 = { short: "webtechFK12", long: "Web-Techniken (mit FK 12)" };

const base = {
  nextSemester: {
    short: "SS 21",
    long: "Sommersemester 2021",
    lectures: [],
  },
  currentSemester: {
    short: "SS 21",
    long: "Sommersemester 2021",
    lectures: [fundc, vss],
  },
  allLectures: [
    algdati,
    algdatii,
    compiler,
    fun,
    fundc,
    sa,
    seiib,
    seiiib,
    swengiib,
    swengiiib,
    vss,
    webtech,
    webtechFK12,
  ],
};

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(base));
}
