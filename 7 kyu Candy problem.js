// https://www.codewars.com/kata/55466644b5d240d1d70000ba

const candies = (kids) =>
  kids.length > 1 ? kids.reduce((r, c) => r + Math.max(...kids) - c, 0) : -1;
