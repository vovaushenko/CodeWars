// https://www.codewars.com/kata/5a4e3782880385ba68000018

const balancedNum = (num) => {
  let number = [...(num + '')].map(Number);
  if (number.length % 2 == 0) {
    let leftSum = number
      .slice(0, number.length / 2 - 1)
      .reduce((a, b) => a + b);
    let rightSum = number.slice(number.length / 2 + 1).reduce((a, b) => a + b);
    return leftSum == rightSum ? 'Balanced' : 'Not Balanced';
  } else {
    let leftSum = number
      .slice(0, Math.floor(number.length / 2))
      .reduce((a, b) => a + b);
    let rightSum = number
      .slice(Math.floor(number.length / 2) + 1)
      .reduce((a, b) => a + b);
    return leftSum == rightSum ? 'Balanced' : 'Not Balanced';
  }
};
