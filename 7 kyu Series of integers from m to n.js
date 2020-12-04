// https://www.codewars.com/kata/5841f680c5c9b092950001ae

const generateIntegers = (min, max) =>
  Array.from({ length: max - min + 1 }, (_) => min++);