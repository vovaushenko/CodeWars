//2274. Maximum Consecutive Floors Without Special Floors

const maxConsecutive = (bottom, top, special) => {
	let fromFloor = bottom;

	let result = 0;

	special.sort((a, b) => a - b);

	special.push(1 + top);

	for (const sp of special) {
		const nextFloor = sp - 1;

		const outcome = nextFloor - fromFloor + 1;

		result = Math.max(result, outcome);

		fromFloor = 1 + sp;
	}

	return result;
};
