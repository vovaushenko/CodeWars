// https://www.codewars.com/kata/59b844528bcb7735560000a0

const isNice = (arr) => {
  if (arr.length === 0) return false
  for (let num of arr) {
    if (!(arr.includes(num - 1) || arr.includes(num + 1))) {
      return false;
    }
  }
  return true;
};

console.log(isNice([2, 10, 9, 3]));
