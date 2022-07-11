//1409. Queries on a Permutation With Key
const processQueries = (queries, m) => {
	const arr = Array.from({ length: m }, (_, id) => id + 1);
	const res = [];
	for (const q of queries) {
		const id = arr.indexOf(q);
		res.push(id);

		arr.unshift(q);
		arr.splice(id + 1, 1);
	}

	return res;
};
