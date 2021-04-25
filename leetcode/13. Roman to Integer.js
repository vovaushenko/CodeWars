// 13. Roman to Integer

const lookup = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  const integers = [...s].map((roman) => lookup[roman]);
  let [i, j] = [0, 1];

  while (j < integers.length) {
    if (integers[i] < integers[j]) integers[j] -= 2 * integers[i];

    i++;
    j++;
  }

  return integers.reduce((a, b) => a + b, 0);
};
