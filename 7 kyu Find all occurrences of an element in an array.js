// https://www.codewars.com/kata/59a9919107157a45220000e1

const findAll = (arr, num) => {
  let solution = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      solution.push(i);
    }
  }

  return solution;
};
