// https://www.codewars.com/kata/554e52e7232cdd05650000a0

const lowestProduct = (num) => {
  if (num.length < 4) return 'Number is too small';
  num = num.split('').map(Number);
  let min = Infinity;

  for (let i = 0; i < num.length - 3; i++) {
    min = Math.min(min, num[i] * num[i + 1] * num[i + 2] * num[i + 3]);
  }
  return min;
};
