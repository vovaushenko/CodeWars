// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

const maxTriSum = (arr) => {
  //firstly we will remove duplicates
  uniqueArr = arr.filter(function (item, pos) {
    return arr.indexOf(item) == pos;
  });

  // then sort in descending order
  // so first 3 elements will be the biggest ones
  // and then find their total
  solution = uniqueArr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, num) => total + num);
  return solution;
};

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
