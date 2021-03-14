// https://www.codewars.com/kata/58e230e5e24dde0996000070

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));
