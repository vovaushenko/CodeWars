// https://www.codewars.com/kata/5a04133e32b8b998dc000089

const solve = (arr) => {
  let solution = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1))) solution.push(arr[i]);
  }

  
  return solution;
};
