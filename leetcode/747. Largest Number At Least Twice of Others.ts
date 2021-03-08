// 747. Largest Number At Least Twice of Others

const dominantIndex = (nums: number[]): number => {
  let map: { [key: string]: number } = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  const values = Object.keys(map);
  if (map[values[values.length - 1]] > 1) return -1;

  if (+values[values.length - 1] < 2 * +values[values.length - 2]) return -1;
  return nums.indexOf(+values[values.length - 1]);
};
