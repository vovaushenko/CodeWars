// https://www.codewars.com/kata/56001790ac99763af400008c

const largestSum = (arr) => {
  let largestSum = -Infinity;

  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (tempSum < 0) tempSum = 0;
    largestSum = Math.max(largestSum, tempSum);
  }
  return largestSum >= 0 ? largestSum : 0;
};

console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
