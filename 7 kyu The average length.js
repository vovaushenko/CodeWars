// https://www.codewars.com/kata/5a430359e1ce0e35540000b1

const averageLength = (arr) => {
  const averageLength = Math.round(
    arr.map((w) => w.length).reduce((a, b) => a + b, 0) / arr.length
  );
  return arr.map((w) => (w.length !== averageLength ? w[0].repeat(averageLength) : w));
};
