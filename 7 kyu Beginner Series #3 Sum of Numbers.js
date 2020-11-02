// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
