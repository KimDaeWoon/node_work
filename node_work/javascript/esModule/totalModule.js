// 값 만 들어 오기에
export function total(fst, ...arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    fst
  );
}

export function findNum(num, arr) {
  return arr.find((ele) => ele == num);
}

export function filterNum(num, arr) {
  return arr.filter((ele) => ele > num);
}
