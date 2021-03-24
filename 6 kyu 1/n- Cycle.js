// https://www.codewars.com/kata/5a057ec846d843c81a0000ad

const cycle = (n) => {
  if (n % 2 === 0 || n % 5 === 0) return -1;
  let [cycleLength, num] = [0, 1];

  while (++cycleLength) {
    num = (num * 10) % n;
    if (num === 1) return cycleLength;
  }
};
