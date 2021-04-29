const findChildren = (santasList, children) => {
	const rewarded = {};
	const res = [];
	for (kid of children) {
		if (santasList.includes(kid) && !(kid in rewarded)) {
			rewarded[kid] = true;
			res.push(kid);
		}
	}

	return res.sort();
};
