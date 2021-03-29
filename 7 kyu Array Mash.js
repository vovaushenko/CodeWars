// https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript

const arrayMash = (a1, a2) => a1.reduce((mash, digit, id) => mash.concat(digit, a2[id]), []);
