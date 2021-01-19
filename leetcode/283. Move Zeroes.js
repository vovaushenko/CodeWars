// 283. Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
    let detectedZero;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0) {
            detectedZero = nums.splice(i, 1);
            nums.push(detectedZero[0]);
        }
    }

    return nums;
};
