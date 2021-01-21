// https://www.codewars.com/kata/557cffec8c3e8e55cc00010f

const countZerosInNumber = (num) => [...(num + '')].filter((digit) => !+digit).length;

const countZeros = (lastNum) => {
  let zeroes = 0;
  for (let i = 1; i <= lastNum; i++) zeroes += countZerosInNumber(i);

  return zeroes;
};
