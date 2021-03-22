// https://www.codewars.com/kata/57fcaed83206fb15fd00027a

const replaceNth = (text, n, oldValue, newValue) => {
  let count = 0;
  let result = '';

  for (let char of text) {
    if (char === oldValue) {
      count++;
      if (count === n) {
        result += newValue;
        count = 0;
      } else {
        result += oldValue;
      }
    } else {
      result += char;
    }
  }

  return result;
};
