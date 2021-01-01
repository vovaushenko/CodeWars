// https://www.codewars.com/kata/56d5166ec87df55dbe000063
const findAvarage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const sumAverage = (arr) => Math.floor(arr.reduce((total, subarr) => total + findAvarage(subarr), 0));