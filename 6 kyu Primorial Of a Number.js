// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const numPrimorial = (num) => {
  // firstly generate arr of primes
  let arrOfPrimes = [];

  for (let j = 2; j < Infinity; j++) {
    if (isPrime(j)) arrOfPrimes.push(j);
    if (arrOfPrimes.length == num) break;
  }
  return arrOfPrimes.reduce((product, n) => product * n);
};
