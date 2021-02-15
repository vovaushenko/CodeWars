// 347. Top K Frequent Elements
// Given a non-empty array of integers, return the k most frequent elements.

const topKFrequent = (nums: number[], k: number): number[] => {
  const map: { [key: string]: number } = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((tuple) => +tuple[0]);
};
