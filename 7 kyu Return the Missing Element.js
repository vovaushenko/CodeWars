// https://www.codewars.com/kata/5299413901337c637e000004

const getMissingElement = (arr) => {
  let full = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let num of full) {
    if (!arr.includes(num)) {
      return num;
    }
  }
};