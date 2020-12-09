// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c

const pattern = (num) => {
  let res = '';
  for (let i = 0; i < num; i++) {
    res += '\n';
    for (let j = num; j > i; j--) {
      res += j;
    }
  }
  return res.trim();
};
