// https://www.codewars.com/kata/578dec07deaed9b17d0001b8

const goldbachPartitions = (n) => {
  if (n % 2 !== 0) return [];
  if (n === 4) return ['2+2'];
  const primes = [];
  tempNum = 2;

  while (tempNum < n) {
    if (isPrime(tempNum)) primes.push(tempNum);
    tempNum++;
  }

  const res = [];
  const seen = {};

  for (let i = 0; i < primes.length; i++) {
    seen[primes[i]] = true;
    if (primes.includes(n - primes[i]) && !seen[n - primes[i]]) {
      res.push(`${primes[i]}+${n - primes[i]}`);
    }
  }

  return res;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};
