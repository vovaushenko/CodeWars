// https://www.codewars.com/kata/5a4b16435f08299c7000274f

const sumSquareEvenRootOdd = (arr) =>
  Number(
    arr
      .map((num) => (num % 2 === 0 ? num ** 2 : Math.sqrt(num)))
      .reduce((total, num) => total + num, 0)
      .toFixed(2)
  );
