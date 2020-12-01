// https://www.codewars.com/kata/53046ceefe87e4905e00072a

const palindrome = (str) => {
  let onlyLetters = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  let reversed = '';
  for (let i = onlyLetters.length - 1; i >= 0; i--) {
    reversed += onlyLetters[i];
  }
  return reversed === onlyLetters ? true : false;
};
