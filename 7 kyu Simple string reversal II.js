// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac

const solve = (str, start, end) => {
  const before = str.slice(0, start);
  const mid = str.slice(start, end + 1);
  const after = str.slice(end + 1);
  return before + [...mid].reverse().join('') + after;
};