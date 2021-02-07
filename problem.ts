const sum = (a: number, b: number, c: number): number => a + b + c;

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        if (sum(nums[i], nums[j], nums[k]) === 0) {
          res.push([nums[i], nums[j], nums[k]]);
          while (nums[j] == nums[j + 1]) j++;
          while (nums[k] == nums[k - 1]) k--;
          j++;
          k--;
        } else if (sum(nums[i], nums[j], nums[k]) < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return res;
}
