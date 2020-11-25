// https://www.codewars.com/kata/588ac50727eb94c87700001f

const consecutiveOnes = (nums) => {
  let maxConsecutives = 0;
  let counterOfConsecutives = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      counterOfConsecutives++;
    } else {
      counterOfConsecutives = 0;
    }
    maxConsecutives = Math.max(maxConsecutives, counterOfConsecutives);
  }
  return maxConsecutives;
};
