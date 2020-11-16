// https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc

const splitByValue = (num, arr) => {
  const smaller = arr.filter((el) => el < num);
  const bigger = arr.filter((el) => el >= num);
  const result = [...smaller, ...bigger];
  return result;
};
