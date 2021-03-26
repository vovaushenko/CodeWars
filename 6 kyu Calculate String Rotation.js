// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

const shiftedDiff = (first, second) => {
  let count = 0;
  const chars = [...first];
  let tempChar;
  while (count < first.length) {
    if (chars.join('') === second) return count;
    tempChar = chars.pop();
    chars.unshift(tempChar);
    count++;
  }

  return -1;
};

const betterAlternative = (first, second) =>
  first.length === second.length ? (second + second).indexOf(first) : -1;
