function makeDate(str, daytime) {
  // assume str == "07.10.2019"
  // assume daytime = "dienstags, 11:45 - 13:15"
  const time = daytime
    .split("-")[1]
    .trim()
    .split(":");
  const date = new Date(str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"));
  date.setHours(time[0], time[1]);
  return date;
}

function nextLecture(lecture) {
  if (!lecture.lectures) return undefined;
  const t = new Date();
  return lecture.lectures.find(l => makeDate(l.date, lecture.daytime) >= t);
}

function nextLabs(lab) {
  if (!lab.labs) return undefined;
  let labsPerGroup = [];
  const t = new Date();
  for (const i in lab.labs[1].dates) {
    labsPerGroup[i] = lab.labs
      .map(l => {
        return {
          date: l.dates[i].date,
          topic: l.topic,
          cancelled: l.cancelled || l.dates[i].cancelled
        };
      })
      .find(l => makeDate(l.date, lab.groups[i].daytime) >= t);
  }
  return labsPerGroup;
}

exports.nextLecture = nextLecture;
exports.nextLabs = nextLabs;
