// https://www.codewars.com/kata/568ff914fc7a40a18500005c

const distancesFromAverage = (arr) => {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.map((num) => +(average - num).toFixed(2));
};
