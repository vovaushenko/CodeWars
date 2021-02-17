// 961. N-Repeated Element in Size 2N Array
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

const repeatedNTimes = (nums: number[]): number | undefined => {
  let checkedNums: { [key: string]: number } = {};

  for (let num of nums) {
    if (checkedNums[num]) return num;
    if (!checkedNums[num]) checkedNums[num] = 1;
  }
};
