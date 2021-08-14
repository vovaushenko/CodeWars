// https://leetcode.com/problems/maximum-population-year/
// 1854. Maximum Population Year
/*

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.
*/
const maximumPopulation = (logs) => {
	let cache = {};
	let maxPop = 0;
	for (log of logs) {
		const [born, _] = log;
		let currentPop = logs.filter((lg) => lg[0] <= born && lg[1] > born).length;
		cache[born] = currentPop;
		maxPop = Math.max(currentPop, maxPop);
	}

	for (let key in cache) {
		if (cache[key] === maxPop) return +key;
	}
};
