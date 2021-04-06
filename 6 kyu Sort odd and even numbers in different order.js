// https://www.codewars.com/kata/5a1cb5406975987dd9000028

const sortArray = (arr) => {
  const sortedEven = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  const sortedOdd = arr.filter((num) => num % 2).sort((a, b) => a - b);

  const res = [];
  let [i, j] = [0, 0];

  for (let num of arr) {
    if (num % 2 === 0) {
      res.push(sortedEven[i]);
      i++;
    } else {
      res.push(sortedOdd[j]);
      j++;
    }
  }
  return res;
};
