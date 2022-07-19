// function(exports,require,module,__filename,__dirname)// node js
// create your own server
const http = require("http");
const fs = require("fs");
// Routing / .. /about /home
const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("hello from home page");
  else if (req.url == "/about") res.end("about page");
  else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      // console.log(data);
      res.writeHead(200, { "content-type": "application/json" });
      //   const objData = JSON.parse(data); // convert to JS Object
      // res.end(objData[0].name);
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    console.log(__dirname);
    res.end("404 page not found");
  }
});

// start your server

server.listen(3300, "localhost", () => {
  console.log("server listening on port no : 3300");
});
