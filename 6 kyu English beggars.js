// https://www.codewars.com/kata/59590976838112bfea0000fa

const beggars = (val, n) => {
  if (n == 0) return [];
  let res = Array.from({ length: n }, () => []);
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    res[count].push(val[i]);
    count++;
    if (count === n) {
      count = 0;
    }
  }

  return res.map((a) => a.reduce((a, b) => a + b, 0));
};



