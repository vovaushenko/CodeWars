// https://www.codewars.com/kata/52945ce49bb38560fe0001d9

const pascal = (n) => {
  if (n === 1) return [[1]];
  let res = [[1], [1, 1]];

  while (res.length < n) {
    let subarr = [];
    let i = 0;
    let j = 1;
    while (j < res[res.length - 1].length) {
      subarr.push(res[res.length - 1][i] + res[res.length - 1][j]);
      i++;
      j++;
    }
    subarr.unshift(res[res.length - 1][0]);
    subarr.push(res[res.length - 1][res[res.length - 1].length - 1]);
    res.push(subarr);
  }

  return res;
};
