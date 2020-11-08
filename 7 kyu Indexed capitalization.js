// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1

function capitalize(str, arr) {
  // firstly sort array for the sake of our algo
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let solution = '';
  //will loop throug string and array of capitalization
  //capitalize when need be and then increment index in arr
  while (i < str.length && j < arr.length) {
    if (i === arr[j]) {
      solution += str[i].toUpperCase();
      j++;
    } else {
      solution += str[i];
    }
    i++;
  }
  // if the arr is exhausted, just add the rest of our string
  while (i < str.length) {
    solution += str[i];
    i++;
  }
  return solution;
}
