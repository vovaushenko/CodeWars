// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034

const isPronic = (n) => {
  let [i, j] = [0, 1];
  let tempPronic = 0;
  while (tempPronic < n) {
    tempPronic = i * j;
    i++;
    j++;
  }

  return tempPronic === n;
};
