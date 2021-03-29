// https://www.codewars.com/kata/563b1f55a5f2079dc100008a/solutions/javascriptconst getLargerNumbers = (a1, a2) =>
a1.reduce((largest, num, id) => largest.concat(Math.max(num, a2[id])), []);
