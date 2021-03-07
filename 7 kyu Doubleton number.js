// https://www.codewars.com/kata/604287495a72ae00131685c7

const isDoubleton = (num) => [...new Set([...(num + '')])].length === 2;

const doubleton = (num) => {
  while (!isDoubleton(num)) num++;
  return num;
};
