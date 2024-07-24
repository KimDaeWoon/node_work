// promise 실습

let num1 = 10;
let num2 = 20;
let total = 30;

// promise 객체 생성 => 호출 then 과 catch
function numSum() {
  return new Promise((resolve, reject) => {
    if (num1 + num2 == total) {
      resolve("Good");
    } else {
      reject("Bad");
    }
  });
}

numSum()
  .then((result) => console.log(result)) // resolve 결과 조회 호출
  .catch((err) => console.log(err)); // reject 결과 조회 호출

async function sumAwait() {
  //let result = await numSum(); // 정상 실행 경우 만 가능 catch 는 불가능
  let result = await numSum().catch((err) => err); //err 은 catch 까지 걸어 줘야됨
  console.log(result + " 1번");
}
sumAwait();
