// 1556. Thousand Separator
// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

const thousandSeparator = (n: number): string => {
  let strNum = n + '';
  if (strNum.length <= 3) return strNum + '';

  let result = '';

  let counter = 0;
  for (let i = strNum.length - 1; i >= 0; i--) {
    result += strNum[i];
    counter++;
    if (counter === 3 && i !== 0) {
      result += '.';
      counter = 0;
    }
  }

  return [...result].reverse().join('');
};
