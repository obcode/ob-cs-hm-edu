import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map(post => {
    return {
      title: post.title,
      slug: post.slug
    };
  })
);

const lectures = {
  current: [
    { slug: "algdati", title: "Algorithmen und Datenstrukturen I" },
    { slug: "vss", title: "Verteilte Softwaresysteme" }
  ],
  all: [
    { slug: "algdati", title: "Algorithmen und Datenstrukturen I" },
    { slug: "algdatii", title: "Algorithmen und Datenstrukturen II" },
    { slug: "fun", title: "Funktionale Programmierung" },
    { slug: "vss", title: "Verteilte Softwaresysteme" }
  ]
};

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(lectures));
}
