// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

const oddOnesOut = (arr) => {
  const map = arr.reduce((h, d) => ((h[d] = h[d] + 1 || 1), h), {});
  const result = [];

  for (let digit of arr) {
    if (map[digit] % 2 === 0) result.push(digit);
  }

  return result;
};
