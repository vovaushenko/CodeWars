// https://www.codewars.com/kata/55960bbb182094bc4800007b

const insertDash = (num) => {
  num = String(num);
  let sol = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0 && i < num.length - 1) {
      sol += num[i];
      sol += '-';
    } else {
      sol += num[i];
    }
  }
  return sol;
};
