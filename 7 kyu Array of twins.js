// https://www.codewars.com/kata/58fdc60ed94f25a863000092/train/javascript

const twins = (arr) =>
  Object.values(arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})).every(
    (frequency) => frequency === 2
  );
