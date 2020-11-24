// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

const findMissing = (list) => {
  list = list.sort((a, b) => a - b);
  let steps = [];
  for (let i = 0; i < list.length - 1; i++) {
    steps.push(Math.abs(list[i] - list[i + 1]));
  }
  let preciseStep = Math.min(...steps);

  for (let j = 0; j < list.length - 1; j++) {
    if (Math.abs(list[j] - list[j + 1]) !== preciseStep) {
      return list[j] + preciseStep;
    }
  }
};