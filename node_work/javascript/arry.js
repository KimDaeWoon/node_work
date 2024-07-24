// arry.map. filter, reduce

let arr = [
  { username: "choi", dept: "개발", sal: 2000 },
  { username: "park", dept: "인사", sal: 1000 },
  { username: "kim", dept: "개발", sal: 1500 },
];
// 0. userName 이 park 인 사원
// ㅂ
let findN = arr.find((emp) => emp.username == "park");
//console.log(findN);

// 1. sal 1500 이상인 사원 조회 <filter 함수 사용>
let check = arr.filter((arr) => arr.sal >= 1500);
//console.log(check);

// 2. 급여 오름 차순으로 정렬 1000 => 1500 => 2000 <sort 함수>
// 문자 값은 뺄셈 안됨 if
// 3항 연산자 사용 해보기
// sort return 값으로는 0 -1 +1 으로 해줘야 한다
let ssot = arr.sort(sortCompare);

function sortCompare(a, b) {
  if (a.username > b.username) {
    return 1;
  }
  if (a.username < b.username) {
    return -1;
  }
  // 같으면 0
  return 0;

  // arr.sort((a,b)=>{a.sal - b.sal})
  // console.log(arr);
}
//console.log(ssot);

// 3. 급여 합계 <reduce 함수>
let sumvalue = 0;
let sum1 = arr.reduce(
  // currentValue 배열 요소를 가져온다
  // accumulator 누적 될 값
  (accumulator, currentValue) =>
    //console.log(currentValue.sal);
    accumulator + currentValue.sal,
  sumvalue
);
console.log(sum1);

// 4. 500 인상
let upCount = arr.map(function (element) {
  element.sal += 500;
  return element;
});

//-------------------------------
let mapResult = arr.map((emp) => {
  return { ...emp, sal: emp.sal + 500 };
});
console.log(mapResult);

// 5.     sal > 2000 이상인 사원명 [kim,choi],
let filterMapResult = arr
  .filter((ele) => ele.sal > 2000)
  .map((ele) => ele.username);
//console.log(filterMapResult);
