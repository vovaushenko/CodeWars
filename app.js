// https://www.codewars.com/kata/538948d4daea7dc4d200023f

const convertBits = (a, b) => [...(a ^ b).toString(2)].filter((a) => +a).length;

console.log(convertBits(14, 31));
