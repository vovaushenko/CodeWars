const combinationSum = (candidates, target) => {
	const result = [];

	const combinate = (remainder, combination, start) => {
		if (remainder < 0) return;
		if (remainder === 0) {
			result.push([...combination]);
			return;
		}

		for (let i = start; i < candidates.length; i++) {
			combinate(remainder - candidates[i], [...combination, candidates[i]], i);
		}
	};

	combinate(target, [], 0);
	return result;
};
