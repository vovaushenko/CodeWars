// https://leetcode.com/problems/destination-city/

const destCity = (paths) => {
	const map = {};

	for (let [x, y] of paths) {
		map[x] ? map[x]++ : (map[x] = 1);
		map[y] ? map[y]++ : (map[y] = 1);
	}

	for (let [_, y] of paths) {
		if (map[y] === 1) return y;
	}
};

console.log(
	destCity([
		['B', 'C'],
		['D', 'B'],
		['C', 'A'],
	])
);
