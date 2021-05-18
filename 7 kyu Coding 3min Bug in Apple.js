// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9

const sc = (apple) =>
	apple.reduce(
		(coords, row, id) => (
			row.includes('B') && coords.push(id, row.indexOf('B')), coords
		),
		[]
	);
