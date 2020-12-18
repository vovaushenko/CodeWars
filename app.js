// https://www.codewars.com/kata/526233aefd4764272800036f

const matrixAddition = (a, b) =>
  a.map((row, firstId) => row.map((num, secondId) => num + b[firstId][secondId]));

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
