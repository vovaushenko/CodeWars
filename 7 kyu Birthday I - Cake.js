// https://www.codewars.com/kata/5805ed25c2799821cb000005

const cake = (x, y) => {
  const total = [...y]
    .map((char, id) => (id % 2 === 0 ? char.charCodeAt(0) : char.charCodeAt(0) - 97 + 1))
    .reduce((a, b) => a + b, 0);

  return x * 0.7 > total ? 'That was close!' : 'Fire!';
};
