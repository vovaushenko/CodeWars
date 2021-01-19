// 204. Count Primes
// Count the number of prime numbers less than a non-negative number, n.

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

const countPrimes = (n) => {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    isPrime(i) && primes.push(i);
  }

  return primes.length;
};
