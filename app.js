// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

const solution = (nums) => {
  let [i, j] = [0, 1];

  let intervals = [];
  let tempInterval = [];
  while (j < nums.length + 1) {
    if (Math.abs(nums[i] - nums[j]) === 1) {
      tempInterval.push(nums[i]);
    } else {
      tempInterval.push(nums[i]);
      intervals.push(tempInterval);
      tempInterval = [];
    }
    i++;
    j++;
  }

  const res = intervals.map((int) => {
    if (int.length <= 2) return int.join(',');
    return `${int[0]}-${int[int.length - 1]}`;
  });
  return res.join(',');
};

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
