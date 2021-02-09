// https://www.codewars.com/kata/5302f383be2a91e4d70002c6

const zeroFill = (num, size) => {
  let solution = [...(Math.abs(~~num) + '')];

  while (solution.length < size) solution.unshift(0);

  return solution.join('');
};
