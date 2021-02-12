// https://www.codewars.com/kata/55c2a1ee7fe3ccfee5000058

const countCombinations = (str, pattern) =>
  (str.toLowerCase().match(new RegExp(pattern, 'g')) || []).length;
