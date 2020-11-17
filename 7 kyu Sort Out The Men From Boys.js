// https://www.codewars.com/kata/5af15a37de4c7f223e00012d

const menFromBoys = (arr) => {
  let unique = [...new Set(arr)];
  let men = unique.filter((el) => el % 2 === 0).sort((a, b) => a - b);
  let boys = unique.filter((el) => el % 2 !== 0).sort((a, b) => b - a);
  
  return [...men, ...boys]
};