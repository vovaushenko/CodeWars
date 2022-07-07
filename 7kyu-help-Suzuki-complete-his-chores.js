const choreAssignment = (chores) => {
	const sorted = [...chores].sort((a, b) => a - b);
	const res = [];
	let [i, j] = [0, sorted.length - 1];

	while (i < j) {
		res.push(sorted[i] + sorted[j]);
		i++;
		j--;
	}

	return res.sort((a, b) => a - b);
};
