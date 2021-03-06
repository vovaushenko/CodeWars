// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

// An integer y is a power of three if there exists an integer x such that y == 3x.

const checkPowersOfThree = (n) => {
  const powers = [];
  let tempNum = 0;
  let counter = 0;

  while (tempNum < n) {
    tempNum = 3 ** counter;
    counter++;
    powers.push(tempNum);
  }

  for (let i = powers.length - 1; i >= 0; i--) {
    if (n - powers[i] >= 0) n -= powers[i];
  }

  return n === 0;
};
