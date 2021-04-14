// 633. Sum of Square Numbers
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

const judgeSquareSum = (c) => {
  const original = c;
  if (c <= 2 || Math.sqrt(c) % 1 === 0) return true;
  let limit = Math.round(Math.sqrt(c));
  let squares = [];

  for (let i = 1; i <= limit; i++) squares.push(i ** 2);

  const singleNum = squares.find((n) => n * 2 === c);
  if (singleNum) return true;

  let [i, j] = [0, squares.length - 1];

  while (i < j) {
    if (squares[i] + squares[j] === c) return true;
    if (squares[i] + squares[j] < c) {
      i++;
    } else {
      j--;
    }
  }

  return false;
};
