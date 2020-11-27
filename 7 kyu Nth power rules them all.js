// https://www.codewars.com/kata/58aed2cafab8faca1d000e20

const modifiedSum = (arr, num) =>
  arr.reduce((total, el) => total + el ** num - el, 0);