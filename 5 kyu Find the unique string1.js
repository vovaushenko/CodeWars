// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

const findUniq = (arr) => {
  let mixed = arr.join('');
  let map = {};
  for (let char of mixed) {
    map[char.toLowerCase()]
      ? map[char.toLowerCase()]++
      : (map[char.toLowerCase()] = 1);
  }

  let frequencyPairs = Object.entries(map).sort((a, b) => a[1] - b[1]);
  let res = arr.filter((a) => a.toLowerCase().includes(frequencyPairs[0][0]));
  return res;
};