/*
You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:

The chosen integers have to be in the range [1, n].
Each integer can be chosen at most once.
The chosen integers should not be in the array banned.
The sum of the chosen integers should not exceed maxSum.
Return the maximum number of integers you can choose following the mentioned rules.
*/
const maxCount = (banned, n, maxSum) => {
	const bannedSet = new Set(banned);
	let count = 0;
	let currentSum = 0;
	for (let i = 1; i <= n; i++) {
		if (bannedSet.has(i)) continue;
		currentSum += i;
		if (currentSum > maxSum) break;
		count++;
	}
	return count;
};