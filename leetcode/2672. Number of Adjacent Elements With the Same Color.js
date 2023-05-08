// BRUTE FORCE
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
	const array = Array.from({ length: n }, () => 0);
	const res = [];

	for (const [id, v] of queries) {
		array[id] = v;
		let adj = 0;
		let [i, j] = [0, 1];
		while (j < array.length) {
			if (array[i] && array[i] === array[j]) {
				adj++;
			}
			i++;
			j++;
		}
		res.push(adj);
	}
	return res;
};
