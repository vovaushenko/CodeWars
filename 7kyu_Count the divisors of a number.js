// https://www.codewars.com/kata/542c0f198e077084c0000c2e

const getDivisorsCnt = (n) => {
  let solution = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      solution.push(i);
    }
  }
  return solution.length;
};
