// https://www.codewars.com/kata/565b112d09c1adfdd500019c

const nthChar = (arr) => arr.map((word, id) => word[id]).join('');

console.log(nthChar(['yoda', 'best', 'has']));
