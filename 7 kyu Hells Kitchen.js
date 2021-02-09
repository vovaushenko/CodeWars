const ramsify = (word) =>
  [...word]
    .map((char) => {
      if ('EIOU'.includes(char)) return '*';
      if (char === 'A') return '@';
      return char;
    })
    .join('') + '!!!!';

const gordon = (a) =>
  a
    .toUpperCase()
    .split(' ')
    .map((word) => ramsify(word))
    .join(' ');
