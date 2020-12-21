// https://www.codewars.com/kata/58c9322bedb4235468000019

const findSummerOfDigits = (n) =>
  n.split('').reduce((total, digit) => total + Number(digit), 0) + '';

const isVeryEven = (num) => {
  let stringifiedNum = num + '';
  
  if (stringifiedNum.length === 1) {
    return num % 2 === 0 ? true : false;
  }
  let isVeryEven;

  const helper = (n) => {
    if (n.length === 1) {
      Number(n) % 2 === 0 ? (isVeryEven = true) : (isVeryEven = false);
      return;
    }
    n = findSummerOfDigits(n);
    helper(n);
  };

  helper(stringifiedNum);
  return isVeryEven;
};