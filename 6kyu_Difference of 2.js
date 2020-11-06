// https://www.codewars.com/kata/5340298112fa30e786000688

const twosDifference = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let solution = [];
  console.log(sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] - sortedArr[j] === -2) {
        solution.push([sortedArr[i], sortedArr[j]]);
      }
    }
  }
  return solution;
};
