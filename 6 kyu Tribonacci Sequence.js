// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature, n) => {
  if (n < 3) return signature.slice(0, n);
  let res = [];
  res = res.concat(signature);
  let i = 0,
    j = 1,
    k = 2;

  while (res.length < n) {
    res.push(res[i] + res[j] + res[k]);
    i++;
    j++;
    k++;
  }

  return res;
};