// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

const rowSumOddNumbers = (num) => {
  // lets firstly know how many numbers is before this particular row
  let numberOfOdds = 0;
  for (let i = 1; i <= num; i++) {
    numberOfOdds += i;
  }
  // lets generate array of odds
  let odds = [];

  for (let j = 1; j < Infinity; j++) {
    if (j % 2 !== 0) {
      odds.push(j);
    }

    if (odds.length === numberOfOdds) {
      break;
    }
  }
  // solution will be the sum of the last row === num

  let rowSum = 0;
  for (let k = odds.length - 1; k > odds.length - num - 1; k--) {
    rowSum += odds[k];
  }
  return rowSum;
};
