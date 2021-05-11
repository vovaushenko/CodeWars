// 1200. Minimum Absolute Difference

/*

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

*/

const minimumAbsDifference = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);

	let minDif = Infinity;
	let [i, j] = [0, 1];

	while (j < sorted.length) {
		minDif = Math.min(minDif, sorted[j] - sorted[i]);
		i++;
		j++;
	}

	[i, j] = [0, 1];
	const res = [];
	while (j < sorted.length) {
		if (sorted[j] - sorted[i] === minDif) res.push([sorted[i], sorted[j]]);
		i++;
		j++;
	}

	return res;
};
