const lookup = {
	0: 0,
	1: 1,
	6: 9,
	8: 8,
	9: 6,
};

const isUpsideDownNumber = (num) =>
	+[...(num + '')]
		.reverse()
		.map((digit) => lookup[digit])
		.join('') === num;

const solve = (x, y) =>
	Array.from({ length: y - x }, (_, id) => x + id).filter((num) =>
		isUpsideDownNumber(num)
	).length;
