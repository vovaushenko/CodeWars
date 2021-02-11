// https://www.codewars.com/kata/57ced2c1c6fdc22123000316

const numObj = (s) => s.map((num) => ({ [num]: String.fromCharCode(num) }));

console.log(numObj([118, 117, 120]));
