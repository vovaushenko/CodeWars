// https://www.codewars.com/kata/55f3facb78a9fd5b26000036/train/javascript

const checkRoot = (str) => {
  const digits = str.split(',').map(Number);
  if (digits.includes(NaN) || digits.length !== 4 || digits.includes(0)) return 'incorrect input';
  if (!isConsecutive(digits)) return 'not consecutive';

  const digitsProduct = digits.reduce((prod, digit) => prod * +digit, 1);

  return `${digitsProduct + 1}, ${Math.sqrt(digitsProduct + 1)}`;
};

const isConsecutive = (arr) => {
  let [i, j] = [0, 1];
  while (j <= arr.length - 1) {
    if (arr[j] - arr[i] !== 1) return false;
    i++;
    j++;
  }
  return true;
};
