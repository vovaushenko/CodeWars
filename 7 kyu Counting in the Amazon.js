// https://www.codewars.com/kata/55b95c76e08bd5eef100001e

const countArara = (num) => {
  const one = 'anane';
  const two = 'adak';
  if (num === 1) return one;
  if (num % 2 === 0) {
    return Array.from({ length: num / 2 }, () => two).join(' ');
  } else {
    return Array.from({ length: Math.floor(num / 2) + 1 }, (_, id) =>
      id !== Math.floor(num / 2) ? two : one
    ).join(' ');
  }
};