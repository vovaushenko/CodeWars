// 645. Set Mismatch

const findErrorNums = (nums: number[]): number[] => {
  if (nums.length === 2) {
    return nums[0] === 1 ? [1, 2] : [2, 1];
  }
  const map: { [key: string]: number } = {};

  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  const result = [];
  for (let key in map) {
    if (map[key] > 1) result.push(+key);
  }

  const numbers = Object.keys(map);

  for (let i = 1; i <= +numbers[numbers.length - 1]; i++) {
    if (!numbers.includes(i + '')) result.push(i);
  }
  if (result.length === 1) result.push(+numbers[numbers.length - 1] + 1);
  return result;
};

console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]));
