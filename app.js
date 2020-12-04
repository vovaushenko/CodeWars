// https://www.codewars.com/kata/57f8ee485cae443c4d000127

const spacify = (str) =>
  str
    .split(' ')
    .map((word) => word.split('').join(' '))
    .join('   ');

console.log(spacify('hello world'));


'h e l l o   w o r l d'