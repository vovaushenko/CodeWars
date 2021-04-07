// 1742. Maximum Number of Balls in a Box

const countBalls = (lowLimit, highLimit) => {
  const boxes = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    if (!boxes[sumOfDigits(i)]) {
      boxes[sumOfDigits(i)] = 1;
    } else {
      boxes[sumOfDigits(i)]++;
    }
  }

  return Math.max(...Object.values(boxes));
};

const sumOfDigits = (num) => +[...(num + '')].reduce((a, b) => a + +b, 0);

console.log(countBalls(5, 15));
