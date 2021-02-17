// 1512. Number of Good Pairs

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

const numIdenticalPairs = (nums: number[]): number => {
  const map: { [key: string]: number } = {};
  for (let num of nums) map[num] ? map[num]++ : (map[num] = 1);
  console.log(map);
  let goodPairsCounter = 0;

  for (let num of nums) {
    if (map[num] > 1) {
      goodPairsCounter += map[num] - 1;
      map[num]--;
    }
  }
  return goodPairsCounter;
};
