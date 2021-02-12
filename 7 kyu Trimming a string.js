// https://www.codewars.com/kata/563fb342f47611dae800003c

const trim = (str, n) =>
  str.length < n ? str.slice(0, str.slice(0, n).length <= 3 ? n : n - 3) + '...' : str;
