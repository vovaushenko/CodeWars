// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(str) {
  console.log(str);
  if (str[0] === ')' || str[str.length - 1] === '(') {
    return false;
  }

  let map = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  let arrOfFrequencies = [...Object.values(map)];

  return arrOfFrequencies[0] === arrOfFrequencies[1] ? true : false;
}
