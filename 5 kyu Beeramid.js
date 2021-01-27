// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

const beeramid = (bonus, price) => {
  if (bonus <= 0) return 0;
  let numberOfCans = bonus / price;

  let numerOfLevels = 0;
  let counter = 1;
  while (true) {
    numberOfCans -= counter ** 2;
    if (numberOfCans < 0) {
      break;
    }
    counter++;
    numerOfLevels++;
  }
  return numerOfLevels;
};
