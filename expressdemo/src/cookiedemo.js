const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// middleware ..
app.use(cookieParser());

app.get("/signin", (req, res) => {
  //   console.log(req);
  res.cookie("session_id", "12345", { maxAge: 8000 });
  res.status(200).send("Logged In successfully");
});

function validateCookie(req, res, next) {
  const { cookies } = req;
  if ("session_id" in cookies) {
    console.log("session id exists");
    if (cookies.session_id === "12345") next();
    else res.status(403).send("not authenticated");
  } else res.status(403).send("not authenticated");
}

app.get("/protected", validateCookie, (req, res) => {
  res.status(200).send("authenticated user");
});
app.listen(8000, () => {
  console.log("server is running");
});
