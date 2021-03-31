// https://www.codewars.com/kata/5a84d485742ba347b90006b7

const howManyGifts = (maxBudget, gifts) => {
  gifts = gifts.sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < gifts.length; i++) {
    if (maxBudget - gifts[i] >= 0) {
      maxBudget -= gifts[i];
      counter++;
    }
  }

  return counter;
};
