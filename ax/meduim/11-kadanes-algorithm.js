const kadanesAlgorithm = (arr) => {
	let [runningSum, maxSum] = [0, -Infinity];

	for (const num of arr) {
		if (runningSum < 0) runningSum = 0;
		runningSum += num;
		maxSum = Math.max(runningSum, maxSum);
	}
	return maxSum;
};
