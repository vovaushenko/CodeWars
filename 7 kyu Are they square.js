// https://www.codewars.com/kata/56853c44b295170b73000007

const isSquare = (arr) => (arr.length ? arr.every((num) => !(Math.sqrt(num) % 1)) : undefined);
