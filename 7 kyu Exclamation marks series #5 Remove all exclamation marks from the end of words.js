// https://www.codewars.com/kata/57faf32df815ebd49e000117

const remove = (sentence) =>
  sentence.split(' ').reduce((res, word) => (res += removeExclamationsFromTheEnd(word) + ' '), '');

const removeExclamationsFromTheEnd = (str) => {
  let newStr = '';
  let flag = true;
  for (let i = str.length - 1; i >= 0; i--) {
    if (flag) {
      if (str[i] !== '!') {
        newStr += str[i];
        flag = false;
      }
    } else {
      newStr += str[i];
    }
  }

  return [...newStr].reverse().join('');
};

// function remove(s){
//     return s.replace(/\b!+/g, '');
//   }
