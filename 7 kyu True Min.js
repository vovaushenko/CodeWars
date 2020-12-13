// https://www.codewars.com/kata/52378b3ee72f21e1ea000045

const min = (a, b) => {
  if (a === null) a = 0;
  if (b === null) b = 0;
  return (a && b) || a == 0 || b == 0 ? (a < b ? a : b) : NaN;
};
