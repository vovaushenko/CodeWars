// https://www.codewars.com/kata/585b1fafe08bae9988000314

const explode = (input) => {
  let result = '';
  for (let num of input) {
    for (let i = 0; i < num; i++) {
      result += num;
    }
  }

  return result;
};