// https://www.codewars.com/kata/563d54a7329a7af8f4000059

const buildRowText = (index, char) => {
  let row = Array.from({ length: 9 }, (_, id) => (id == index ? (_ = char) : (_ = ' ')));

  return '|' + row.join('|') + '|';
};
