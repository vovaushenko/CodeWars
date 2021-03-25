// https://www.codewars.com/kata/5848f4f2d8543bf3c7000602

const number9 = (n) => {
  let count = 0;
  let tempNum = 1;

  while (tempNum <= n) {
    let current = Math.floor(n / tempNum);
    count += Math.floor(current / 10) * tempNum;
    if (current % 10 === 9) {
      count += (n % tempNum) + 1;
    }
    tempNum *= 10;
  }

  return count;
};
