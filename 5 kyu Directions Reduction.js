/*
5 kyu
Directions Reduction*/
const dirReduc = (arr) => {
	const dict = {
		NORTH: 'SOUTH',
		EAST: 'WEST',
		SOUTH: 'NORTH',
		WEST: 'EAST',
	};
	return arr.reduce(
		(acc, cur) => (
			dict[acc[acc.length - 1]] === cur ? acc.pop() : acc.push(cur), acc
		),
		[]
	);
};
