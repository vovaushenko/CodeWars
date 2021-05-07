// https://www.codewars.com/kata/54fdadc8762e2e51e400032c

const myParseInt = (str) => (str.trim().match(/[\D]/) ? NaN : parseInt(str));

console.log(myParseInt('1 2 3'));

console.log(parseInt('1 2 3'));
