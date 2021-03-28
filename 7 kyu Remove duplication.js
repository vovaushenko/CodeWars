// https://www.codewars.com/kata/5904d222e1bfd3354e000026

const removeDuplication = (arr) =>
  Object.entries(arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {}))
    .filter(([_, frequency]) => frequency === 1)
    .map(([num, _]) => +num);
