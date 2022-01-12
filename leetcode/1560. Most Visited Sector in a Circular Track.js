// 1560. Most Visited Sector in a Circular Track
/*
Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).
*/
const mostVisited = (n, rounds) => {
	const start = rounds[0];
	const end = rounds[rounds.length - 1];
	const result = [];

	if (start <= end) {
		for (let i = start; i <= end; i++) result.push(i);
	} else {
		for (let i = 1; i <= end; i++) result.push(i);
		for (let i = start; i <= n; i++) result.push(i);
	}
	return result;
};
