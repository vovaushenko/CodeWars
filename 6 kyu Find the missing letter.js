// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

const findMissingLetter = (arr) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCase = arr.map((char) => alphabet.indexOf(char.toLowerCase()));
  let missing;
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i + 1] - lowerCase[i] == 2) {
      missing = alphabet[lowerCase[i] + 1];
    }
  }

  return arr[0].toUpperCase() === arr[0] ? missing.toUpperCase() : missing;
};