// 1079. Letter Tile Possibilities
/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
*/
const numTilePossibilities = (tiles) => {
	const map = [...tiles].reduce(
		(mp, char) => mp.set(char, (mp.get(char) || 0) + 1),
		new Map()
	);
	return counter(map);
};

const counter = (map) => {
	let sum = 0;

	for (let [char, frequency] of map.entries()) {
		if (!frequency) continue;
		sum++;
		map.set(char, map.get(char) - 1);
		sum += counter(map, sum);
		map.set(char, map.get(char) + 1);
	}
	return sum;
};
