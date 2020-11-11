// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

const rowWeights = (arr) => {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (evenSum += arr[i]) : (oddSum += arr[i]);
  }
  return [evenSum, oddSum];
};
