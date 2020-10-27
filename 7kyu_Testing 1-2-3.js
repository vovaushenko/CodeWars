// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

const number = function (array) {
  if (array.length === 0) {
    return [];
  }
  let solution = [];

  for (let i = 0; i < array.length; i++) {
    solution.push(`${i + 1}: ${array[i]}`);
  }

  return solution;
};
