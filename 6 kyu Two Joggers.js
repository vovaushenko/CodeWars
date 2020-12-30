// https://www.codewars.com/kata/5274d9d3ebc3030802000165

const nbrOfLaps = (x, y) => {
  let l = x;

  while (l % y !== 0) {
    l += x;
  }

  return [l / x, l / y];
};
