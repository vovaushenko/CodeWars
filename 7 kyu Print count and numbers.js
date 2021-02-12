// https://www.codewars.com/kata/559af787b4b8eac78b000022

const countMe = (str) => {
  if (str.replace(/[^a-zA-Z]+/g, '')) return '';
  let i = 0;
  let j = 1;

  let counter = 1;
  let res = '';

  while (j < str.length + 1) {
    if (str[i] !== str[j]) {
      res += counter + str[i];
      counter = 1;
    } else {
      counter++;
    }
    i++;
    j++;
  }

  return res;
};
