//1282. Group the People Given the Group Size They Belong To
const groupThePeople = (groupSizes) => {
	const map = {};
	const res = [];

	for (let i = 0; i < groupSizes.length; i++) {
		const size = groupSizes[i];
		if (!map[size]) {
			map[size] = [];
		}
		map[size].push(i);
		if (map[size].length === size) {
			res.push(map[size]);
			map[size] = null;
		}
	}
	return res;
};
