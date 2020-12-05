// https://www.codewars.com/kata/55de6173a8fbe814ee000061

const unusedDigits = (...nums) => {
  let n = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  nums = nums.join('').split('');
  res = n.filter((a) => !nums.includes(a)).join('');
  return res;
};