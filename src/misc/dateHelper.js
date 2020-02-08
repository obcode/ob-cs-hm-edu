function makeDate(str) {
  // assume str == "07.10.2019"
  return new Date(str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"));
}

function nextLecture(lecture) {
  if (!lecture.lectures) return undefined;
  return lecture.lectures.find(l => makeDate(l.date) >= new Date());
}

function nextLabs(lab) {
  if (!lab.labs) return undefined;
  let labsPerGroup = [];
  for (const i in lab.labs[1].dates) {
    labsPerGroup[i] = lab.labs
      .map(l => {
        return {
          date: l.dates[i].date,
          topic: l.topic,
          cancelled: l.cancelled || l.dates[i].cancelled
        };
      })
      .find(l => makeDate(l.date) >= new Date());
  }
  return labsPerGroup;
}

exports.nextLecture = nextLecture;
exports.nextLabs = nextLabs;
