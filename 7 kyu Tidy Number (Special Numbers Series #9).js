// https://www.codewars.com/kata/5a87449ab1710171300000fd

const tidyNumber = (num) => {
  num = [...(num + '')].map(Number);
  for (let i = 0; i < num.length; i++) {
    if (num[i] - num[i + 1] > 0) return false;
  }
  return true;
};
