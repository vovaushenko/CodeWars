// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
  let word = str;
  let counter = 0;
  let start = true;
  return () => {
    if (!start) counter++;
    if (counter >= str.length) counter = 0;
    start = false;
    return word[counter];
  };
}