// 645. Set Mismatch
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

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