// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

const cubeOdd = (arr) => {
  const cubed = arr.map((num) => (num = num ** 3));
  let oddSum = 0;
  for (let num of cubed) {
    if (num % 2 !== 0) {
      oddSum += num;
    }
  }

  return oddSum || oddSum === 0 ? oddSum : undefined;
};
