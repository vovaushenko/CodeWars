// 368. Largest Divisible Subset

/*
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.
*/

const largestDivisibleSubset = function (nums) {
	nums.sort(function (a, b) {
		return a - b;
	});

	let max = [];

	const map = {};

	const grow = function (arr, index) {
		let pushed = false;

		if (arr.length > max.length) {
			max = arr;
		}

		if (index >= nums.length) {
			return;
		}

		if (arr.length === 0) {
			grow([nums[index]], index + 1);
		} else {
			if (nums[index] % arr[arr.length - 1] === 0) {
				if (map[nums[index]] && map[nums[index]] > arr.length + 1) {
				} else {
					let nextarr = [...arr];
					nextarr.push(nums[index]);

					map[nums[index]] = nextarr.length;

					grow(nextarr, index + 1);
				}
			}
		}
		grow([...arr], index + 1);
	};

	grow([], 0);

	return max;
};
