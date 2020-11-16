// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

const solution = (str) => {
  let breakCamel = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      breakCamel += ' ';
    }
    breakCamel += str[i];
  }
  return breakCamel;
};