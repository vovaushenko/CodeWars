// https://www.codewars.com/kata/525e5a1cb735154b320002c8

function triangular(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    let tempSum = 0;
    sum += tempSum + i;
  }
  return sum;
}
