// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
  let sum = 0;
  let num = String(number);

  for (let n of num) {
    if (parseInt(n)) {
      sum += parseInt(n);
    }
  }

  return sum;
}
