// https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (arr1, arr2) => {
  let solution = [];

  for (let el of arr1) {
    if (!arr2.includes(el)) {
      solution.push(el);
    }
  }

  return solution;
};