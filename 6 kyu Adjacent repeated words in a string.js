// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

const countAdjacentPairs = (str) => {
  str = str.toLowerCase().split(' ');
  console.log(str);
  let counter = 0;
  let strike = false;
  let i = 0,
    j = 1;
  while (j < str.length) {
    if (str[i] === str[j] && str[j] !== str[j + 1]) {
      counter++;
      strike = true;
    }

    i++;
    j++;
  }
  return counter;
};