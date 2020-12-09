// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

const jumpingNumber = (num) => {
  let convertedToArray = [...(num + '')];
  if (convertedToArray.length === 1) return 'Jumping!!';
  let i = 0,
    j = 1;
  while (j < convertedToArray.length) {
    if (Math.abs(convertedToArray[i] - convertedToArray[j]) !== 1) {
      return 'Not!!';
    }
    i++;
    j++;
  }

  return 'Jumping!!';
};