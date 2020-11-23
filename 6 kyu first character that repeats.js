// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb

const firstDup = (str) => {
  const map = {};

  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  console.log(map);

  for (char of str) {
    if (map[char] > 1) {
      return char;
    }
  }
};