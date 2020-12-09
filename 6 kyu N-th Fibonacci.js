//www.codewars.com/kata/522551eee9abb932420004a0

https: const nthFibo = (n) => {
  let fibs = [0, 1];
  let i = 0;
  let j = 1;
  while (fibs.length < n) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
  }

  return n > 2 ? fibs[fibs.length - 1] : fibs[n - 1];
};
