// https://www.codewars.com/kata/5877e7d568909e5ff90017e6



const sumOfDigits = (num) =>
  [...(num + '')].reduce((a, b) => a + parseInt(b), 0);

const isIncreasing = (num) => {
  numbers = [...(num + '')].map(Number);
  return numbers.every((number, i) => i === 0 || numbers[i - 1] <= number);
};

const findAll = (sum, numLength) => {
  let maxNumber = parseInt(Array.from({ length: numLength }, () => 9).join(''));
  let maxNumberLength = [...(maxNumber + '')].length;
  let possibilities = [];
  while (true) {
    let currentLength = [...(maxNumber + '')].length;
    if (isIncreasing(maxNumber) && sumOfDigits(maxNumber) === sum) {
      possibilities.push(maxNumber);
    }
    maxNumber--;
    if (currentLength === maxNumberLength - 1) {
      break;
    }
  }
  possibilities = possibilities.sort((a, b) => a - b);

  return possibilities.length === 0
    ? []
    : [
        possibilities.length,
        String(possibilities[0]),
        String(possibilities[possibilities.length - 1]),
      ];
};

console.log(findAll(27, 3));
