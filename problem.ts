// [5,2,1,2,5,2,1,2,5]

function maximumUniqueSubarray(nums: number[]): number {
	let [currentSum, maxSum] = [0, 0];
	let [i, j] = [0, 0];
	let set = new Set();

	while (i < nums.length) {
		if (!set.has(nums[i])) {
			set.add(nums[i]);
			currentSum += nums[i];
			maxSum = Math.max(maxSum, currentSum);
			i++;
		} else {
			set.delete(nums[j]);
			currentSum -= nums[j];
			j++;
		}
	}

	return maxSum;
}

console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
