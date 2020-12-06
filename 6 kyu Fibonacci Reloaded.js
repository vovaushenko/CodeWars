// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

const fib = (n) => {
  if (n == 1) return 0;
  const fibs = [0, 1];
  let i = 0,
    j = 1;
  while (fibs.length < n) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
  }

  return fibs[fibs.length - 1];
};