// https://www.codewars.com/kata/5921c0bc6b8f072e840000c0

const sequenceClassifier = (arr) => {
  const differences = [];
  let [i, j] = [0, 1];
  while (j < arr.length) {
    differences.push(arr[j] - arr[i]);
    i++;
    j++;
  }
  const positive = differences.filter((dif) => dif > 0);
  const zero = differences.filter((dif) => !dif);
  const negative = differences.filter((dif) => dif < 0);

  if (positive.length && negative.length) return 0;
  if (positive.length === arr.length - 1) return 1;
  if (positive.length && zero.length && !negative.length) return 2;
  if (negative.length === arr.length - 1) return 3;
  if (negative.length && zero.length && !positive.length) return 4;
  return 5;
};
