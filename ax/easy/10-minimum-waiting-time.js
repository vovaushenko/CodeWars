// https://www.algoexpert.io/questions/Minimum%20Waiting%20Time
const minimumWaitingTime = (queries) => {
	const sorted = queries.sort((a, b) => a - b);
	let totalWaitingTime = 0;
	for (let i = 0; i < sorted.length; i++) {
		const leftQueries = queries.length - i - 1;
		totalWaitingTime += queries[i] * leftQueries;
	}
	return totalWaitingTime;
};
