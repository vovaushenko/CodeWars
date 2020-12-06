// https://www.codewars.com/kata/57ebdf944cde58f973000405

const reverser = (sentence) =>
  sentence
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
