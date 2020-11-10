// https://www.codewars.com/kata/59dbab4d7997cb350000007f
const isomorph = (str1, str2) => {
  console.log(str1, str2);
  if (str1.length !== str2.length) {
    return false;
  }
  // lets check if strings is equal
  let eq1 = [...str1].sort();
  let eq2 = [...str2].sort();

  let counter = 0;
  for (let i = 0; i < eq1.length; i++) {
    if (eq1[i] === eq2[i]) counter++;
  }
  if (counter === eq1.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let char of str1) {
    map1[char] ? map1[char]++ : (map1[char] = 1);
  }
  for (let char of str2) {
    map2[char] ? map2[char]++ : (map2[char] = 1);
  }

  let arr1 = [];
  let arr2 = [];

  for (let key in map1) {
    arr1.push(map1[key]);
  }
  for (let key in map2) {
    arr2.push(map2[key]);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
