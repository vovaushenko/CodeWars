// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

const matchup = (arr1, arr2) => {
  let solution = [];
  for (let i = 0; i < arr2.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        counter++;
      }
    }
    solution.push(counter);
  }
  return solution;
};
