// https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = (morseCode) => {
  morseCode = morseCode
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((char) => MORSE_CODE[char])
        .join('')
    )
    .join(' ');

  return morseCode;
};