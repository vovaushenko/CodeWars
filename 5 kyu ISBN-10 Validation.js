// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

const validISBN10 = (isbn) =>
  isbn.length !== 10 || isbn.slice(0, -1).includes('X')
    ? false
    : [...isbn].reduce((acc, digit, id) => acc + (digit === 'X' ? 10 : digit) * ++id, 0) % 11 === 0;
