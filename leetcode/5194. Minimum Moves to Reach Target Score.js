//5194. Minimum Moves to Reach Target Score
const minMoves = (target, maxDoubles) => {
	if (!maxDoubles) return target - 1;
	let count = 0;

	while (target) {
		if (target % 2 === 0 && maxDoubles) {
			target /= 2;
			maxDoubles--;
			count++;
		} else {
			target--;
			count++;
		}
	}

	return count - 1;
};
