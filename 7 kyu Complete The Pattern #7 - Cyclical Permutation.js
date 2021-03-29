// https://www.codewars.com/kata/557592fcdfc2220bed000042

const pattern = (n) => {
  const result = [];
  let row = Array.from({ length: n }, (_, id) => id + 1);
  let digit;

  while (result.length < n) {
    result.push(row.join(''));
    digit = row.shift();
    row.push(digit);
  }

  return result.join('\n');
};
