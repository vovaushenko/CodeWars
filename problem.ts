const check = (nums: number[]): boolean => {
  let changes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) changes++;
  }
  console.log(changes);
  return true;
};

check([2, 1, 3, 4]);
