// 357. Count Numbers with Unique Digits

const countNumbersWithUniqueDigits = (n: number): number => {
  let counter = 0;

  for (let i = 0; i < 10 ** n; i++) {
    if (numberHasUniqueDigits(i)) counter++;
  }
  return counter;
};

const numberHasUniqueDigits = (num: number): boolean =>
  [...new Set(...[num + ''])].length === [...(num + '')].length;

console.log(countNumbersWithUniqueDigits(7));
