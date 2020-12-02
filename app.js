// https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const generatePrimeArray = (num) => {
  let arr = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const total = (arr) => {
  let primes = generatePrimeArray(arr.length);
  console.log(primes);
  return primes.reduce((t, a) => t + arr[a], 0);
};

console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
