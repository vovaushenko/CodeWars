//https://www.algoexpert.io/questions/Staircase%20Traversal

const staircaseTraversal = (height, maxSteps) => {
	let steps = Array.from({ length: maxSteps }, (_, step) => step + 1);
	const result = [];

	const combinate = (remainder, combination, start) => {
		if (remainder < 0) return;
		if (remainder === 0) {
			result.push([...combination]);
			return;
		}

		for (let i = 0; i < steps.length; i++) {
			combinate(remainder - steps[i], [...combination, steps[i]], i);
		}
	};

	combinate(height, [], 0);

	return result.length;
};
