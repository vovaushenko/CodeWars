const pointsNumber = (r) => {
	let res = 0;
	for (let i = -r; i <= r; i++) {
		for (let j = -r; j <= r; j++) {
			if (i ** 2 + j ** 2 <= r ** 2) res++;
		}
	}
	return res;
};
