// https://www.codewars.com/kata/58223370aef9fc03fd000071

const dashatize = (num) => {
  console.log(num);
  if (num !== num) {
    return 'NaN';
  }
  num = String(Math.abs(num));

  let solution = '';
  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[i]) % 2 !== 0) {
      solution += `-${num[i]}-`;
    } else {
      solution += num[i];
    }
  }
  let result = solution.replace(/--/g, '-');

  let final = '';
  for (let j = 0; j < result.length; j++) {
    if (
      (j === 0 && result[j] === '-') ||
      (j === result.length - 1 && result[j] === '-')
    ) {
      final += '';
    } else {
      final += result[j];
    }
  }

  return final;
};
