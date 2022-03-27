//1029. Two City Scheduling
/*
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
*/
const twoCitySchedCost = (costs) => {
	let total = 0;
	costs.sort((a, b) => a[0] - b[0] - (a[1] - b[1]));
	for (let i = 0; i < costs.length / 2; i++) {
		sum += costs[i][0] + costs[i + costs.length / 2][1];
	}
	return total;
};
