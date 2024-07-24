// filename : fstest.js
// 파일 읽기
import fs from "fs";
// 비동기
fs.readFile("C:/temp/module.js", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  //console.log(data);
});

// 동기
let data = fs.readFileSync("C:/temp/module.js", "utf-8");
console.log(data.toString());
console.log("2. the end");
