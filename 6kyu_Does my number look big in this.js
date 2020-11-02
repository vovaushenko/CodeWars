// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  let val = String(value);
  let length = val.length;
  let sum = 0;
  for (let digit of val) {
    sum += digit ** length;
  }

  return sum === value ? true : false;
}
