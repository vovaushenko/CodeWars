// https://www.codewars.com/kata/5a946d9fba1bb5135100007c

const isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const minimumNumber = (arr) => {
  let originalSum = arr.reduce((a, b) => a + b, 0);

  let sum = originalSum;
  while (!isPrime(sum)) {
    sum++;
  }
  return sum - originalSum;
};