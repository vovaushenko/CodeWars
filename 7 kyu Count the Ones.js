// https://www.codewars.com/kata/5519e930cd82ff8a9a000216

const hammingWeight = (n) => {
  let ones = 0;
  while (n >= 1) {
    if (n % 2) ones++;

    n = Math.floor(n / 2);
  }
  return ones;
};
