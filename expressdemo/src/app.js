//  run commands from within the folder ===>
// npm init-y
// npm -i express

const express = require("express"); // for accessing express
const app = express(); // express is created... app
// GET  POST PUT DELETE
// read create update delete  // CRUD Operations use as per requirements
const users = [
  { name: "Abhishek", address: "Janakpuri", job: "Manager" },
  { name: "Shalini", address: "Harinagar", job: "Counselor" },
  { name: "Parul", address: "KarolBagh", job: "Designer" },
];
app.get("/", (req, res) => {
  //res.send("Hello from server...");
  //   res.send({
  //     data: "hello",
  //     user: {},
  //   });
  res.status(200).send("everything is fine here");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:name", (req, res) => {
  // console.log(req.params);

  const { name } = req.params;
  const user = users.find((u) => u.name === name);
  if (user) {
    res.status(200).send(user);
  } else res.status(404).send("Not Found");

  res.send(users);
});

app.get("/find", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const user = users.find((usr) => usr.name === name);
  if (user) res.status(200).send(user);
  else res.status(404).send("User not found");
  res.send("ok");
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
