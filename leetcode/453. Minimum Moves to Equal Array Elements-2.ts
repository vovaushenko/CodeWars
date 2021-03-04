// 453. Minimum Moves to Equal Array Elements

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

const calculateMoves = (n: number[], midNum: number): number =>
  n.reduce((moves, digit) => moves + Math.abs(digit - midNum), 0);

const minMoves2 = (nums: number[]): number => {
  nums.sort((a, b) => a - b);

  if (nums.length % 2 !== 0) {
    const midNum = nums[~~(nums.length / 2)];

    return calculateMoves(nums, midNum);
  } else {
    const midNum1 = nums[~~(nums.length / 2)];
    const midNum2 = nums[~~(nums.length / 2) - 1];

    return midNum1 === midNum2
      ? calculateMoves(nums, midNum1)
      : Math.min(calculateMoves(nums, midNum1), calculateMoves(nums, midNum2));
  }
};
