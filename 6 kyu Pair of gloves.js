// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

const numberOfPairs = (gloves) =>
  Object.values(gloves.reduce((h, g) => ((h[g] = h[g] + 1 || 1), h), {})).reduce(
    (glovesCount, c) => glovesCount + Math.trunc(c / 2),
    0
  );
