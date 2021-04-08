// 1742. Maximum Number of Balls in a Box
// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

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