// https://www.codewars.com/kata/58ef87dc4db9b24c6c000092

const sectSort = (arr, start, len) =>
  len !== undefined
    ? [
        ...arr.slice(0, start),
        ...arr.slice(start, start + len).sort((a, b) => a - b),
        ...arr.slice(start + len),
      ]
    : [...arr.slice(0, start), ...arr.slice(start).sort((a, b) => a - b)];

console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5));
