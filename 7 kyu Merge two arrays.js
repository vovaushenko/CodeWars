// https://www.codewars.com/kata/583af10620dda4da270000c5

const mergeArrays = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i]);
    result.push(arr2[j]);
    i++;
    j++;
  }
  // add rest in the case of unequal lengths
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

merge([1, 2, 3], ["a", "b", "c", "d", "e"]);
