// https://www.codewars.com/kata/57cf50a7eca2603de0000090

const moveTen = (s) =>
  [...s]
    .map((char) =>
      char.charCodeAt(0) + 10 < 123
        ? String.fromCharCode(char.charCodeAt(0) + 10)
        : String.fromCharCode(char.charCodeAt(0) + 10 - 122 + 96)
    )
    .join('');

// a = 97 z = 122

console.log(moveTen('exampletesthere'));
