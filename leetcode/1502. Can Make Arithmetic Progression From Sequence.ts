// 1502. Can Make Arithmetic Progression From Sequence

// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

const canMakeArithmeticProgression = (arr: number[]): boolean => {
  let sorted = [...arr].sort((a, b) => a - b);
  let diff = sorted[1] - sorted[0];
  let i = 0;
  let j = 1;

  while (j < sorted.length) {
    if (sorted[j] - sorted[i] !== diff) return false;
    i++;
    j++;
  }

  return true;
};
