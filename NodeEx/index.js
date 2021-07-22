// File system  : Sync , async
// module s:
const fs = require("fs"); /// import fs from "fs"
//  writing to a file
// fs.writeFileSync("read.txt", "Welcome To NODE!!!");
// // append
// fs.appendFileSync("read.txt", "extra content");
// // reading from file

const bdata = fs.readFileSync("read.txt");
console.log(bdata.toString());
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);

// create a dir
// fs.mkdirSync("myfolder");
// fs.writeFileSync("myfolder/myfile.txt", "file created under a folder");
// fs.unlinkSync("myfolder/myfile.txt");
// fs.rmdirSync("myfolder");

// fs.writeFile("read.txt", "We are working now", (err) => {
//   console.log("Is error creating the file ?" + err);
// });
// fs.appendFile("read.txt", "its fun working with File system", () => {});

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// OS module

// const os = require("os");
// console.log(os.arch());
// console.log(os.freemem() + "bytes");
// console.log(os.freemem() / 1024 / 1024 / 1024 + "bytes");
// console.log(os.totalmem() / 1024 / 1024 / 1024 + "bytes");
// console.log(os.freemem() + "bytes");
// console.log(os.hostname());
// console.log(os.platform());

// path module
// const path = require("path");
// console.log(path.dirname("D:kirtiMCA2NodeEx\read.txt"));
// console.log(path.extname("D:kirtiMCA2NodeEx\read.txt"));
// console.log(path.basename("D:kirtiMCA2NodeEx\read.txt"));
// console.log(path.parse("D:kirtiMCA2NodeEx\read.txt"));

const buf = Buffer.from("Kirti");
console.log(buf);
console.log(buf.toString());
console.log(buf[0]);

const bd = Buffer.alloc(4);
bd.write("Hey!");
console.log(bd);
console.log(bd.toString());
