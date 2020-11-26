// https://www.codewars.com/kata/54466996990c921f90000d61

const isMonotone = (arr) => {
  if (arr.length == 1) return true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] < 0) return false;
  }
  return true;
};
