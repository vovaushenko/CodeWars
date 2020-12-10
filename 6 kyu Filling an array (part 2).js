// https://www.codewars.com/kata/571e9af407363dbf5700067c

const squares = (n) => Array.from({ length: n }, (_, id) => (id + 1) ** 2);

const range = (n, start, step) =>
  Array.from({ length: n }, (_, id) => start + step * id);

const random = (n, min, max) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};
const primes = (n) => {
  let primeNums = [];
  i = 2;
  while (primeNums.length < n) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
    i++;
  }
  return primeNums;
};
