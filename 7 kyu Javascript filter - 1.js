// https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript

function searchNames(logins) {
  return logins.filter((arr) => arr[0][arr[0].length - 1] === '_');
}
