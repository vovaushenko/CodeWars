// https://www.codewars.com/kata/577b9960df78c19bca00007e

const findDigit = (num, n) => {
  let strNum = String(Math.abs(num));

  if (n > strNum.length) {
    return 0;
  }

  return n <= 0 ? -1 : Number(strNum[strNum.length - n]);
};
