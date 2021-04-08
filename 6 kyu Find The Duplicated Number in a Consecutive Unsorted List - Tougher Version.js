// https://www.codewars.com/kata/558f0553803bc3c4720000af

const findDup = (arr) =>
  Object.entries(arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})).find(
    ([_, frequency]) => frequency === 2
  )[0] * 1;
