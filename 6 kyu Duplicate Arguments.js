// https://www.codewars.com/kata/520d9c27e9940532eb00018e

const solution = (...arr) =>
  [...new Set(arr)].length === arr.length ? false : true;