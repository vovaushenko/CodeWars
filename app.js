// https://www.codewars.com/kata/56d5166ec87df55dbe000063
const findAvarage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const sumAverage = (arr) =>
    Math.floor(arr.reduce((total, subarr) => total + findAvarage(subarr), 0));

console.log(
    sumAverage([
        [-4, 3, -8, -2],
        [2, 9, 1, -5],
        [-7, -2, -6, -4],
    ])
);
