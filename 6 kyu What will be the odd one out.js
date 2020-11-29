// https://www.codewars.com/kata/55b080eabb080cd6f8000035

const oddOneOut = (str) => {
  let map = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] % 2 !== 0 && !str.slice(i + 1).includes(str[i]))
      result.push(str[i]);
  }
  return result;
};