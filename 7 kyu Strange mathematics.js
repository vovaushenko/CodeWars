// https://www.codewars.com/kata/604517d65b464d000d51381f

const strangeMath = (n, k) =>
  Array.from({ length: n }, (_, id) => id + 1)
    .sort()
    .indexOf(k) + 1;
