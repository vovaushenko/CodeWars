// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

const last = (str) =>
  str
    .split(' ')
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
