// https://www.codewars.com/kata/6066ae080168ff0032c4107a

const maxSumBetweenTwoNegatives = (arr) => {
  const negativeIds = arr.reduce((ids, num, id) => (num < 0 && ids.push(id), ids), []);
  if (negativeIds.length < 2) return -1;

  let [i, j] = [0, 1];
  let maxSum = -Infinity;
  while (j < negativeIds.length) {
    let tempSumBetweenNegatives = arr
      .slice(negativeIds[i] + 1, negativeIds[j])
      .reduce((a, b) => a + b, 0);

    maxSum = Math.max(maxSum, tempSumBetweenNegatives);

    i++;
    j++;
  }

  return maxSum;
};
