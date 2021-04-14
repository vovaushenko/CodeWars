// https://www.codewars.com/kata/559011063089b0d5500001aa

const CalculateString = (_, nums) =>
  Math.abs(
    [...nums].filter((num) => num === '0').length - [...nums].filter((num) => num === '1').length
  );
