// https://www.codewars.com/kata/5747fcfce2fab91f43000697

const exampleSort = (arr, exampleArr) =>
  arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));

console.log(exampleSort([1, 3, 4, 4, 4, 4, 5], [4, 1, 2, 3, 5]));
