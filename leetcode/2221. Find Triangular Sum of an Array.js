//2221. Find Triangular Sum of an Array
/*
You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

The triangular sum of nums is the value of the only element present in nums after the following process terminates:

Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the triangular sum of nums.
*/
const triangularSum = (nums) => {
	let res = null;
	const helper = (arr) => {
		if (arr.length === 1) {
			return (res = arr[0]);
		}

		const newArr = [];
		let [i, j] = [0, 1];
		while (j < arr.length) {
			const sum = arr[i] + arr[j];
			sum < 10 ? newArr.push(sum) : newArr.push(sum % 10);

			i++;
			j++;
		}
		helper(newArr);
	};
	helper(nums);
	return res;
};
