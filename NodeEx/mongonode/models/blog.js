const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  snippet: { type: String, required: true },
  body: { type: String, required: true },
});
// should be singular

const Blog = mongoose.model("blog", blogSchema); // blog ==> collection search.. after converting it to plural form blogs
module.exports = Blog;
