// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

const sumOfN = (n) => {
  let newN = n;
  n < 0 ? (newN = newN * -1) : newN;

  let sumIterator = 0;
  let positiveArr = [];
  for (let i = 0; i < newN + 1; i++) {
    sumIterator += i;
    positiveArr.push(sumIterator);
  }
  let negativeArr = positiveArr.map((num) => -num);
  negativeArr[0] = 0;

  return n < 0 ? negativeArr : positiveArr;
};
