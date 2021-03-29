// https://www.codewars.com/kata/5822d89270ca28c85c0000f3

const scramble = (str, arr) => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res[arr[i]] = str[i];
  }

  return res.join('');
};
