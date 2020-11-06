// https://www.codewars.com/kata/58daa7617332e59593000006

const findLongest = (arr) => {
  let solution;
  let maxLength = 0;
  for (let num of arr) {
    let strNum = String(num);
    if (strNum.length > maxLength) {
      maxLength = strNum.length;
      solution = num;
    }
  }
  return solution;
};
