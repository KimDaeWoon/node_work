//fileName : process.js
// 명령행 인수 argv (node processTest.js 10 20 40 a b c) 가능
import { argv, env } from "node:process";

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(env.path);

// for( of )
