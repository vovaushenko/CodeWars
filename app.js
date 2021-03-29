// https://www.codewars.com/kata/563b1f55a5f2079dc100008a

const getLargerNumbers = (a1, a2) =>
  a1.reduce((largest, num, id) => largest.concat(Math.max(num, a2[id])), []);

getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]);
