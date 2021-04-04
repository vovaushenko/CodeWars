// https://www.codewars.com/kata/582609930626631a9600003e

const median = (arr) => {
  if (!arr.length) return false;
  const sorted = [...arr].sort((a, b) => a - b);
  const midId = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0 ? (sorted[midId - 1] + sorted[midId]) / 2 : sorted[midId];
};
// arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : false;

console.log(median([10, 29, 23, 94, 76, 96, 5, 85, 4, 33, 47, 41, 87]));
