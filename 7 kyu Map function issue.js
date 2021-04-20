// https://www.codewars.com/kata/560fbc2d636966b21e00009e

const func = (item) => +item % 2 === 0;

const map = (arr, somefunc) => {
  if (typeof somefunc !== 'function') return 'given argument is not a function';
  const res = [];
  for (let num of arr) {
    if (!(num * 1)) return 'array should contain only numbers';
    res.push(func(num));
  }

  return res;
};
