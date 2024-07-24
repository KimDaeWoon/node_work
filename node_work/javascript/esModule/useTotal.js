// useTotal
//import total from "./totalModeul.js";
// default 값 이 export 에 있으면 import 에 {} 없이 사용 가능
import { total, findNum, filterNum } from "./totalModule.js";

console.log(total(10, 50, 60, 40, 30));
console.log(total(10, 7, 35));
let arr = [1, 2, 3, 10];
console.log(findNum(3, arr));
console.log(filterNum(2, arr));
