// https://www.codewars.com/kata/592e830e043b99888600002d

const encode = (str, n) => {
  const ALPHABET = ' abcdefghijklmnopqrstuvwxyz';
  let CIPHER = [...(n + '')].map(Number);
  let result = [...str].map((char) => ALPHABET.indexOf(char));

  let meshWithCipher = [];
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    meshWithCipher.push(result[i] + CIPHER[count]);
    count++;
    if (count >= CIPHER.length) count = 0;
  }

  return meshWithCipher;
};