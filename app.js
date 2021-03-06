// const strBeauty = (str) => {
//   let map = {};
//   let max = -Infinity;
//   let min = Infinity;
//   for (let char of str) {
//     map[char] ? map[char]++ : (map[char] = 1);
//   }
//   for (let key in map) {
//     max = Math.max(max, map[key]);
//     min = Math.min(min, map[key]);
//   }

//   return max - min;
// };

const beautySum = (s) => {
  let totalBeauty = 0;
  for (let i = 0; i < s.length; i++) {
    const map = {};
    for (let j = i; j < s.length; j++) {
      map[s[j]] ? map[s[j]]++ : (map[s[j]] = 1);
      let max = -Infinity;
      let min = Infinity;

      for (let key in map) {
        max = Math.max(max, map[key]);
        min = Math.min(min, map[key]);
      }

      if (max - min > 0) totalBeauty += max - min;
    }
  }

  return totalBeauty;
};

console.log(beautySum('aabcbaa'));
