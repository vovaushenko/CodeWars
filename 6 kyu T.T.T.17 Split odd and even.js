// https://www.codewars.com/kata/57a2ab1abb994466910003af

const splitOddAndEven = (n) => {
  const digits = [...(n + '')];
  const result = [];
  let tempNum = '';
  let [i, j] = [0, 1];

  while (j < digits.length) {
    console.log(digits[i], digits[j]);
    tempNum += digits[i];

    if (digits[i] % 2 !== digits[j] % 2) {
      result.push(+tempNum);
      tempNum = '';
    }
    if (j === digits.length - 1) {
      result.push(+(tempNum + digits[digits.length - 1]));
    }
    i++;
    j++;
  }

  return result;
};
