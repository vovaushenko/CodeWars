// https://www.codewars.com/kata/562d8d4c434582007300004e

const obfuscate = (email) =>
  [...email]
    .map((char) => {
      if (char === '.') char = ' [dot] ';
      if (char === '@') char = ' [at] ';
      return char;
    })
    .join('');