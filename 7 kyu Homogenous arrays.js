// https://www.codewars.com/kata/57ef016a7b45ef647a00002d

const filterHomogenous = (arr) => {
  let result = [];
  for (let array of arr) {
    if (new Set(array.map((x) => typeof x)).size <= 1 && array.length !== 0) {
      result.push(array);
    }
  }
  return result;
};
