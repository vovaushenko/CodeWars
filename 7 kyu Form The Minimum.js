// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

const minValue = (arr) => {
  let unique = [...new Set(arr)];

  return parseInt(unique.sort((a, b) => a - b).join(''));
};
