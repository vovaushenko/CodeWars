// https://www.codewars.com/kata/57a153e872292d7c030009d4

const simpleTransposition = (str) => {
  let row1 = [];
  let row2 = [];
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0 ? row1.push(str[i]) : row2.push(str[i]);
  }
  return row1.join('') + row2.join('');
};
