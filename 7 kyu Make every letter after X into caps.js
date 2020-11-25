// https://www.codewars.com/kata/596a5e32634dad2a3c00003f

const makeEveryLetterAfterXCaps = (str, letter) => {
  const letters = [...str];

  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] === letter) {
      letters[i + 1] = letters[i + 1].toUpperCase();
    }
  }
  return letters.join('');
};