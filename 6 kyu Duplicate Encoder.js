// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(str) {
  let map = {};
  let solution = '';
  for (let char of str) {
    map[char.toLowerCase()]
      ? map[char.toLowerCase()]++
      : (map[char.toLowerCase()] = 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i].toLowerCase()] > 1) {
      solution += ')';
    } else {
      solution += '(';
    }
  }
  return solution;
}
