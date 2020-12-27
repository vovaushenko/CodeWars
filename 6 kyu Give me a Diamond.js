// https://www.codewars.com/kata/5503013e34137eeeaa001648

const diamond = (n) => {
  if (n < 0 || n % 2 == 0) return null;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (i < n / 2) {
      res.push(createRow(i, n));
    } else {
      res.push(createRow(n - i - 1, n));
    }
  }
  return res.join('\n');
};

function createRow(id, len) {
  let row = Array.from({ length: len }, () => '*');
  let i = 0,
    j = row.length - 1,
    counter = id;
  while (counter < (len - 1) / 2) {
    row[i] = ' ';
    row[j] = ' ';
    counter++;
    i++;
    j--;
  }

  return row.join('');
}
