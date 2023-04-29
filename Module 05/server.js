const http = require("http");
const fs = require("fs");
const port = 3000;

function readFile(res, fileName, contentType) {
  fs.readFile("public/" + fileName, (error, data) => {
    if (error) throw error;
    res.writeHead(200, { "Content-type": contentType });
    res.write(data);
    res.end();
  });
}

let server = http.createServer(function (req, res) {
  let fileName = req.url;

  switch (fileName) {
    case "/":
    case "/home": // <-- need to mention this line, as I put <a href="/home>Home</a> in html
      readFile(res, "index.html", "text/html");
      break;
    case "/about":
      readFile(res, "about.html", "text/html");
      break;
    case "/career":
      readFile(res, "career.html", "text/html");
      break;
    case "/contact":
      readFile(res, "contact.html", "text/html");
      break;
    case "/css/style.css":
      readFile(res, "css/style.css", "text/css"); // When calling CSS file
      break;
    default:
      readFile(res, "404.html", "text/html");
      break;
  }
});

server.listen(port, (data) => {
  console.log(`Server run success on ${port}`);
});
