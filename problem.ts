// https://leetcode.com/problems/water-bottles/

const numWaterBottles = (numBottles: number, numExchange: number): number => {
  if (numBottles < numExchange) return numBottles;

  let total = numBottles;
  let empty = 0;

  while (numBottles > 0) {
    numBottles -= numExchange;
    total++;
    empty += 1;
    if (numBottles < 0) break;
    if (empty === numExchange) {
      empty = 0;
      numBottles++;
    }
  }

  return total;
};

console.log(numWaterBottles(15, 7));

// 17
