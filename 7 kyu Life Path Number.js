const reduceToSingleNumber = (num) => {
  let sum = [...(num + '')].reduce((total, digit) => total + +digit, 0);

  while (sum > 9) {
    sum = [...(sum + '')].reduce((total, digit) => total + +digit, 0);
  }
  return sum;
};

const lifePathNumber = (dateOfBirth) =>
  reduceToSingleNumber(
    dateOfBirth.split('-').reduce((lifePNum, num) => lifePNum + reduceToSingleNumber(num), 0)
  );
