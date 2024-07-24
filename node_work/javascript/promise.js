// filename : promise.js
// 비동기 처리
// async await

//setInterval; 반복실행
//setTimeout; 한번실행

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("time out");
    }, 4000);
  });
}
// 1번 then
delay().then((result) => console.log(result));

// 2번 await : 익명 함수

// let result = async function () {
//   return await delay();
// };
// console.log(result());

// 3번 이름있는 함수 -> 호출
// (1번) 주석 처리 풀어줘야됨
async function delayAwait() {
  let result = await delay();
  console.log(result);
}
delayAwait();

// setTimeout(function () {
//   console.log("비상연락망 053-421-2460");
// }, 4000);

// function delay() {
//   // 오류 나면 reject
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 4000);
//   });
// }
