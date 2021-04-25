// https://www.codewars.com/kata/538948d4daea7dc4d200023f

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

const calculate = (n1, n2, o) => operations[o](parseInt(n1, 2), parseInt(n2, 2)).toString(2);
