//* 90. Subsets II

/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

const subsetsWithDup = (nums) => {
	nums.sort((a, b) => a - b);
	let res = [];

	const generateSubsets = (arr, curr) => {
		res.push([...curr]);

		for (let i = 0; i < arr.length; i++) {
			if (i === 0 || arr[i] !== arr[i - 1]) {
				curr.push(arr[i]);

				generateSubsets(arr.slice(i + 1), curr);
				curr.pop();
			}
		}
	};

	generateSubsets(nums, []);

	return res;
};
