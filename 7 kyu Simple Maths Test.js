// https://www.codewars.com/kata/5507309481b8bd3b7e001638

const isPrime = (num) => {
  if (num < 0) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const isEven = (num) => num % 2 === 0;
const divisibleByTen = (num) => num % 10 === 0;

const numberProperty = (n) => [isPrime(n), isEven(n), divisibleByTen(n)];