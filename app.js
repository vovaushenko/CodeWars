// https://www.codewars.com/kata/55e7d9d63bdc3caa2500007d

let gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

let smallest = (n) =>
  Array.from({ length: n }, (_, id) => id + 1).reduce((a, b) => (a * b) / gcd(a, b), 1);

console.log(smallest(40));
