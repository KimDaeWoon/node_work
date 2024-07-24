// filename : arry_hw.js

let arr = [
  { stdId: 1, kor: 90, eng: 80 },
  { stdId: 2, kor: 50, eng: 45 },
  { stdId: 3, kor: 80, eng: 70 },
];

// kor 과 eng 합계 를 sorting
//map 사용 해서 sum 결과 { stdId: 1, kor: 90, eng: 80 sum : ~~},

let sum = 0;
let total = arr.map((ele) => (sum = (ele.kor + ele.eng) / 2));
console.log(total);

// 평균 60미마니 학번만 출력 [2]    filter, map
let avg = 0;
let avgA = arr
  .filter((ele) => (ele.kor + ele.eng) / 2 < 60)
  .map((ele) => ele.stdId);
console.log(avgA);
