// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

const solve = (s) => {
  let arrayOfChars = [...s].sort();
  let i = 0,
    j = 1;
  while (j < arrayOfChars.length) {
    if (arrayOfChars[i].charCodeAt(0) - arrayOfChars[j].charCodeAt(0) !== -1) {
      return false;
    }

    i++;
    j++;
  }
  return true;
};