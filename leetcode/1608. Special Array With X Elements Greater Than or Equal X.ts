// 1608. Special Array With X Elements Greater Than or Equal X
// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

function specialArray(nums: number[]): number {
  for (let i = 1; i < nums.length + 1; i++) {
    let greaterNums = nums.filter((num) => num >= i);

    if (greaterNums.length === i) return i;
  }

  return -1;
}
