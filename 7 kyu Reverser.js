// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

const reverse = (n) => {
  let reversedNum = 0;

  while (n > 0) {
    reversedNum = reversedNum * 10 + (n % 10);
    n = ~~(n / 10);
  }

  return reversedNum;
};
