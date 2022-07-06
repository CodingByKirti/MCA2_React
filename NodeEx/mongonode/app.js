// 1  npm init -y
// 2 npm i express
// 3 npm i mongoose
// 4 mongonode
// app.js
// nodemodules
// package.json
// ==> models
//blog.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const uri = "mongodb+srv://unode:pnode@cluster0.dvgot.mongodb.net/OurBlogs?retryWrites=true&w=majority";

//   mongoose.connect(url).then( /*  what is to be done after suuccessful connection*/).catch(errr)
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(8000);
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// schema ===> collection // structure
// model ==> collection, schema

// create route

app.get("/addblog", (req, res) => {
  const blog = new Blog({
    title: "Party Invite",
    snippet: "Invitation for the birthday Party of Kia",
    body: "more details about the invite",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/showall", (req, res) => {
  Blog.find()                             // no need to create a new blog, simply use find() directly
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/singleblog", (req, res) => {
  Blog.findById("61026eed99cf83093425810d")             // no need to create a new blog, simply use find() directly
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/deleteblog", (req, res) => {
  Blog.findByIdAndDelete("61026eed99cf83093425810d") // no need to create a new blog, simply use find() directly
    .then((result) => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/findbytitle", (req, res) => {
  Blog.find({ title: "New Blog 1" })            // no need to create a new blog, simply use find() directly
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/find", (req, res) => {
  Blog.find({ title: { $regex: /Blog/ } }) // no need to create a new blog, simply use find() directly
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/addmultipleblogs", (req, res) => {
  const blog1 = new Blog({
    title: "New Blog 1",
    snippet: "About the blog 1",
    body: " more about this blog",
  });
  const blog2 = new Blog({
    title: "New Blog 2",
    snippet: "About the blog 2",
    body: " more about this blog",
  });
  const blog3 = new Blog({
    title: "New Blog 3",
    snippet: "About the blog 3",
    body: " more about this blog",
  });

  Blog.insertMany([blog1, blog2, blog3])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//   app.listen(8000);
