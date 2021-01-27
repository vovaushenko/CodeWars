// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = (a1, a2) =>
  a1.reduce((total, num, id) => total + Math.abs(num - a2[id]) ** 2, 0) / a1.length;

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
