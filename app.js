// 0 problems 7-6
// https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc

const splitByValue = (num, arr) => {
  const smaller = arr.filter((el) => el < num);
  const bigger = arr.filter((el) => el >= num);
  const result = [...smaller, ...bigger];
  return result;
};

splitByValue(6, [6, 4, 10, 10, 6]);
