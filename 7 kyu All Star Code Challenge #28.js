// https://www.codewars.com/kata/5866e6992e8d9cdbcd00040a

const convertCF = (num, scale = 'c') => {
  if (scale === 'f') return num * 1.8 + 32;
  if (scale === 'c') return (num - 32) / 1.8;

  throw new Error('hey');
};
