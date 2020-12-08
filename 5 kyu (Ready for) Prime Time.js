// https://www.codewars.com/kata/521ef596c106a935c0000519

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const prime = (max) => {
  let primes = [];

  for (let j = 2; j <= max; j++) {
    if (isPrime(j)) primes.push(j);
  }

  return primes;
};