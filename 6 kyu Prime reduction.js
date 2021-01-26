const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};
const generatePrimes = (a, b) => {
  let primes = [];
  for (let i = a; i <= b; i++) isPrime(i) && primes.push(i);
  return primes;
};

const sumSquareOfDigits = (num) => {
  let counter = 0;
  while (num !== 1) {
    num = [...(num + '')].reduce((a, b) => a + (+b) ** 2, 0);
    counter++;
    if (counter > 5) break;
  }

  return num === 1;
};
const solve = (a, b) => {
  const primes = generatePrimes(a, b);
  let counter = 0;
  for (let prime of primes) {
    if (sumSquareOfDigits(prime)) counter++;
  }
  return counter;
};
console.log(sumSquareOfDigits(2));
console.log(solve(100, 4000));
