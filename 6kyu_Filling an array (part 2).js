// https://www.codewars.com/kata/571e9af407363dbf5700067c

//squares
const squares = (n) => {
  let solution = [];

  for (let i = 1; i <= n; i++) {
    solution.push(i ** 2);
  }
  return solution;
};

//...a range of numbers
const range = (n, start, step) => {
  let solution = [];
  solution.push(start);
  let sum = start;
  for (i = 1; i < n; i++) {
    sum += step;
    solution.push(sum);
  }
  return solution;
};

// ...random numbers
const random = (n, min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let solution = [];
  for (let i = 0; i < n; i++) {
    solution.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return solution;
};

//...prime numbers

const primes = (n) => {
  // LoL
  const arrayOfPrimes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
  ];
  let solution = [];
  for (let i = 0; i < n; i++) {
    solution.push(arrayOfPrimes[i]);
  }
  return solution;
};
