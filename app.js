// https://www.codewars.com/kata/55d6a0e4ededb894be000005

const encode = (str) =>
  [...str]
    .map((char) =>
      /[a-zA-Z]/.test(char)
        ? char.toUpperCase() === char
          ? char.charCodeAt(0) - 64
          : char.charCodeAt(0) - 96
        : char
    )
    .join('');

console.log('a'.charCodeAt(0));
console.log('A'.charCodeAt(0));

console.log(encode('ABCD'));
