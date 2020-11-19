// https://www.codewars.com/kata/54df2067ecaa226eca000229

const f = (num) => (num > 0 && num % 1 === 0 ? (num * (num + 1)) / 2 : false);

console.log(f(3.14));
