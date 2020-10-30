// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  let arr;
  let toCamel = '';
  let dash = false;

  //check whether words are separated with dash
  for (let char of str) {
    if (char === '-') {
      dash = true;
    }
  }
  dash ? (arr = str.split('-')) : (arr = str.split('_'));
  toCamel += arr[0];
  arr.shift();

  //recursion that will capitalize all words except first one
  function camelCaseMaker(input) {
    if (input.length === 0) {
      return;
    }

    for (let i = 0; i < input[0].length; i++) {
      if (i === 0) {
        toCamel += input[0][i].toUpperCase();
      } else {
        toCamel += input[0][i];
      }
    }
    camelCaseMaker(input.slice(1));
  }

  camelCaseMaker(arr);

  return toCamel;
}
