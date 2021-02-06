// https://www.codewars.com/kata/534d80775371ece88d0010b5

const isAN = (num) =>
  (typeof num === 'number' || num instanceof Number) && !isNaN(num) ? true : false;
