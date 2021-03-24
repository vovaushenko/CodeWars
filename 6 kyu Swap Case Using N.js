// https://www.codewars.com/kata/5f3afc40b24f090028233490
const swapTheCase = (char) =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

const swap = (str, n) => {
  n = n.toString(2);
  console.log(n);

  let [i, j] = [0, 0];
  let res = '';

  while (i < str.length) {
    if (n[j] === '1') {
      res += swapTheCase(str[i]);
    } else {
      res += str[i];
    }

    if (str[i].replace(/[^a-zA-Z]+/g, '')) {
      j++;
    }
    i++;

    if (j === n.length) {
      j = 0;
    }
  }

  return res;
};
