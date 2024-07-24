// objLiteral.js
// 객체 상수
// 문자열 상수
// 개 중요!!!!!!!!!!!!!!!!!

let userName = "kim";
// 템플릿 리터럴
let temp = ``;
// 객체 상수

let gName = function () {};
let obj = {
  userName: userName,
  // 축약형
  userName,
  hobby: [],
  addr: { zip: 50001, si: "대구" },
  getName: function () {},
  // 축약형
  gName,
};

//객체 구조 분해 중요
obj.addr.zip;
//
let { addr, hobby } = obj;
let hobby1 = obj.hobby;
//console.log(addr);
//console.log(addr.zip);
//console.log(addr.si);
//console.log(hobby);
//console.log(hobby1);

// 배열 구조 분해 (... -> rest연산자)
let score = [90, 80, 100, 50, 70];
let [fst, snd, ...rest] = score;
//console.log(fst);
//console.log(snd);
//console.log(rest);

// 배열 복사 spread 연산자 이용
//배열 얕은 복사
let copyScore = score;
copyScore[0] = 10;
//console.log(score[0], copyScore[0]);

//배열 깊은 복사
let deepCopyScore = [...score];
deepCopyScore[0] = 50;
//console.log(score[0], deepCopyScore[0]);

//객체 얕은 복사
let emp = { username: "choi", dept: "개발", sal: 5000 };
// copyEmp 얘나, emp 얘나 같은 주소를 참조 하고있다
let copyEmp = emp;
copyEmp.sal = 1000;
//console.log(emp.sal, copyEmp.sal);

//객체 깊은 복사
//let deepCopyEmp = { ...emp };
//deepCopyEmp.sal = 3000;
// 이런 방식 사용 가능
let deepCopyEmp = { ...emp, sal: 3000 };
// {username: "choi", dept: "개발", sal: 5000, sal: 3000} 5000을 3000으로 덮는다
console.log(deepCopyEmp);
console.log(emp);
