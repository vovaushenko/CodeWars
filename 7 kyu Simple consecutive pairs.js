// https://www.codewars.com/kata/5a3e1319b6486ac96f000049

const pairs = (arr) => {
  let [i, j] = [0, 1];
  let pairsCounter = 0;

  while (j < arr.length) {
    Math.abs(arr[i] - arr[j]) === 1 && pairsCounter++;
    i += 2;
    j += 2;
  }

  return pairsCounter;
};
