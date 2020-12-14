// https://www.codewars.com/kata/56044de2aa75e28875000017

const compoundArray = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    merged.push(arr1[i]);
    merged.push(arr2[j]);
    i++;
    j++;
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
};