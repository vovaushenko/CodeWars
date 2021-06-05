// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

const sumEvenAfterQueries = (arr, queries) => {
	let res = [];
	for (let [inc, id] of queries) {
		arr[id] += inc;
		let evenSum = arr.reduce(
			(sum, n) => (n % 2 === 0 ? (sum += n) : (sum += 0)),
			0
		);

		res.push(evenSum);
	}

	return res;
};

sumEvenAfterQueries(
	[1, 2, 3, 4],
	[
		[1, 0],
		[-3, 1],
		[-4, 0],
		[2, 3],
	]
);
