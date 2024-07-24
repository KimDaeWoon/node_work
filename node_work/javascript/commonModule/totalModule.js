// 값 만 들어 오기에
function total(fst, ...arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    fst
  );
}
module.exports = total;
