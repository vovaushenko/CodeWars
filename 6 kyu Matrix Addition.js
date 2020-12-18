// https://www.codewars.com/kata/526233aefd4764272800036f

const matrixAddition = (a, b) =>
  a.map((row, firstId) => row.map((num, secondId) => num + b[firstId][secondId]));
