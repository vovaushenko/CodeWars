// https://www.codewars.com/kata/5e030f77cec18900322c535d

const minimum = (a, x) => {
  let [tempNum1, tempNum2] = [a, a];
  let [count1, count2] = [0, 0];
  while (tempNum1 % x) {
    tempNum1++;
    count1++;
  }

  while (tempNum2 % x) {
    tempNum2--;
    count2++;
  }

  return Math.min(count1, count2);
};
