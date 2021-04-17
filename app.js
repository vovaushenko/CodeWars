const removeDuplicateIds = (obj) => {
  const sorted = Object.entries(obj).sort((pair1, pair2) => pair1[0] - pair2[0]);
  let allChars = {};
  const res = {};

  for (let i = sorted.length - 1; i >= 0; i--) {
    let [key, nums] = sorted[i];
    res[key] = [];
    for (let num of nums) {
      if (!allChars[num]) res[key].push(num);
      allChars[num] ? null : (allChars[num] = true);
    }
  }

  return res;
};

removeDuplicateIds({
  432: ['A', 'A', 'B', 'D'],
  53: ['L', 'G', 'B', 'C'],
  236: ['L', 'A', 'X', 'G', 'H', 'X'],
  11: ['P', 'R', 'S', 'D'],
});
