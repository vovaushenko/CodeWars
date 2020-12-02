// https://www.codewars.com/kata/5970df092ef474680a0000c9

const alphabetized = (str) => {
  return str
    .replace(/[^a-zA-Z]+/g, '')
    .split('')
    .sort((a, b) =>
      a.toLowerCase().charCodeAt(0) !== b.toLowerCase().charCodeAt(0)
        ? a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
        : str.indexOf(a) - str.indexOf(b)
    )
    .join('');
};