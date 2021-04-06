// 1523. Count Odd Numbers in an Interval Range

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

const countOdds = (low: number, high: number): number => {
  let oddsCounter = 0;
  while (low <= high) {
    if (low % 2 !== 0) oddsCounter++;
    low++;
  }

  return oddsCounter;
};
