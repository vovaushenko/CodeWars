// 1848. Minimum Distance to the Target Element

/*
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).
*/

const getMinDistance = (nums, target, start) => {
	if (nums[start] === target) return 0;
	let forward = start;
	let greaterIdOfTarget;
	while (forward < nums.length) {
		if (nums[forward] === target) {
			greaterIdOfTarget = forward;
			break;
		}
		forward++;
	}

	let back = start;
	let smallerIdOfTarget;
	while (back >= 0) {
		if (nums[back] === target) {
			smallerIdOfTarget = back;
			break;
		}
		back--;
	}

	if (smallerIdOfTarget === undefined)
		return Math.abs(greaterIdOfTarget - start);
	if (greaterIdOfTarget === undefined)
		return Math.abs(smallerIdOfTarget - start);

	return Math.min(
		Math.abs(smallerIdOfTarget - start),
		Math.abs(greaterIdOfTarget - start)
	);
};
