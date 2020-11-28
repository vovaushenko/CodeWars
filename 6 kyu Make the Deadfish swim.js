// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

const parse = (data) => {
  let res = [];
  let parser = [...data].reduce((total, char) => {
    if (char === 'i') total++;
    if (char === 's') total = total ** 2;
    if (char === 'd') total--;
    if (char === 'o') res.push(total);
    return total;
  }, 0);
  return res;
};