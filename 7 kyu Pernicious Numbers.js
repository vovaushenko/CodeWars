// https://www.codewars.com/kata/56e195d02bb22479e50016af

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const isPernicious = (num) =>
  isPrime([...num.toString(2)].reduce((weight, digit) => weight + +digit, 0));

const pernicious = (n) => {
  const perniciousNumbers = [];

  for (let i = 2; i <= n; i++) {
    if (isPernicious(i)) perniciousNumbers.push(i);
  }

  return perniciousNumbers.length ? perniciousNumbers : 'No pernicious numbers';
};
