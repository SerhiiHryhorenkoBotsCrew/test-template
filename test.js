const PORT = 8881;

var http = require("http"),
  fs = require("fs");

fs.readFile("./index.html", (err, html) => {
  if (err) {
    throw err;
  }
  http
    .createServer((_, response) => {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT, () => {
      console.log(`Widget app is listening on http://localhost:${PORT}`);
    });
});
