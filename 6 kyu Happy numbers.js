// https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e

const squaredSumOfDigits = (num) => [...(num + '')].reduce((sum, d) => sum + (+d) ** 2, 0);

const isHappy = (n) => {
  const cache = {};

  while (n !== 1) {
    n = squaredSumOfDigits(n);
    if (n in cache) return false;

    cache[n] = true;
  }

  return true;
};
