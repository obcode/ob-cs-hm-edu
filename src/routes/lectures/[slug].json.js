const fetch = require("node-fetch");
const lectPath = `http://localhost:${process.env.PORT}/lectures`;

export async function get(req, res, next) {
  const { slug } = req.params;

  const base = `${lectPath}/${slug}/web/base.json`;

  console.log(base);

  const r = await fetch(base);
  if (r.status == 200) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const j = await r.json();
    res.end(JSON.stringify(j));
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
