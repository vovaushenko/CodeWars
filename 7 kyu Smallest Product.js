// https://www.codewars.com/kata/5b6b128783d648c4c4000129

const smallestProduct = (arr) =>
	arr.reduce(
		(maxP, subarr) =>
			subarr.reduce((x, y) => x * y, 1) < maxP
				? subarr.reduce((x, y) => x * y, 1)
				: maxP,
		Infinity
	);
