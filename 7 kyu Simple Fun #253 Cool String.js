// https://www.codewars.com/kata/590fd3220f05b4f1ad00007c

const isLowerCase = (a) => a.toLowerCase() === a;
const isUpperCase = (a) => a.toUpperCase() === a;

const validAdjecentLetters = (a, b) => {
  if (isLowerCase(a) && isUpperCase(b)) return true;
  if (isUpperCase(a) && isLowerCase(b)) return true;
  return false;
};

const coolString = (s) => {
  if (s.replace(/[a-z]/gi, '')) return false;
  let [i, j] = [0, 1];
  while (j < s.length) {
    if (!validAdjecentLetters(s[i], s[j])) return false;
    i++;
    j++;
  }

  return true;
};
