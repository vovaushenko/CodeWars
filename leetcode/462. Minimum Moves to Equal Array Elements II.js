//462. Minimum Moves to Equal Array Elements II
const minMoves2 = (nums) => {
	if (nums.length < 2) return 0;

	const sorted = [...nums].sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	const median = sorted[mid];

	let moves = 0;

	for (const num of sorted) {
		if (num !== median) {
			num > median ? (moves += num - median) : (moves += median - num);
		}
	}

	return moves;
};
