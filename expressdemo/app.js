const express = require("express"); // for accessing express
const app = express(); // express is created... app
// GET  POST PUT DELETE
// read create update delete  // CRUD Operations

app.use("middleware")
app.get("/", (req, res) => {
  //res.send("Hello from server...");
  //   res.send({
  //     data: "hello",
  //     user: {},
  //   });
  res.status(200).send("everything is fine here");
});
app.post("/hello", (req, res) => {
  res.send({
    data: "hello",
    user: {},
  });
});
app.get("/code", (req, res) => {
  res.status(200).send("everything is fine here");
});

app.listen(6700, () => {
  console.log("Server is listening");
});
