// https://www.codewars.com/kata/52dd72494367608ac1000416

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

const getPrimes = (start, finish) => {
  if (start > finish) [start, finish] = [finish, start];
  let primeNumbers = [];

  for (let i = start; i <= finish; i++) {
    isPrime(i) && primeNumbers.push(i);
  }

  return primeNumbers;
};
