// https://www.codewars.com/kata/53da6a7e112bd15cbc000012

const sortDict = (dict) =>
  Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map(([a, b]) => [+a ? +a : a, b]);
