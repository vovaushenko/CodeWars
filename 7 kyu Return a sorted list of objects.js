// https://www.codewars.com/kata/52705ed65de62b733f000064

const sortList = (sortBy, arr) => {
  return arr.sort((a, b) => b[sortBy] - a[sortBy]);
};
