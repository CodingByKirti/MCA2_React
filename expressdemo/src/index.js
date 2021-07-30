const express = require("express");
const app = express();
const path = require("path");

// use middleware : express.static(path)

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("hellooooo");
});
app.listen(8000);
