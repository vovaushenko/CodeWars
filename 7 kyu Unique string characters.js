// https://www.codewars.com/kata/5a262cfb8f27f217f700000b

const solve = (str1, str2) => {
  let uniques1 = [...str1].filter((a) => !str2.includes(a)).join('');
  let uniques2 = [...str2].filter((a) => !str1.includes(a)).join('');
  return uniques1 + uniques2;
};