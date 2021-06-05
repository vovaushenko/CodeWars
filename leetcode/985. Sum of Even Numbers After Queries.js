// https://leetcode.com/problems/sum-of-even-numbers-after-queries/
/*
We have an array nums of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to nums[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array nums.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.*/

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
