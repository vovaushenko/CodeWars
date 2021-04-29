// https://www.codewars.com/kata/555b605a76962690ea0000c8/train/javascript

const zeckendorf = (n) => {
  if (n < 0) return null;
  const fibs = generateFibs(n);
  const res = [];
  console.log(fibs);
  for (let i = fibs.length - 1; i >= 0; i--) {
    if (n - fibs[i] >= 0) {
      res.push(fibs[i]);
      n -= fibs[i];
    }
  }

  return res;
};

const generateFibs = (limit) => {
  const fibs = [1, 1];
  let [i, j] = [0, 1];
  while (fibs[j] <= limit) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
  }
  return fibs;
};
