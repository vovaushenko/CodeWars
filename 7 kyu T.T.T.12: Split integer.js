// https://www.codewars.com/kata/5776600afc8cd670130000df

const splitInt = (
	n,
	candidates = Array.from({ length: n - 1 }, (_, id) => id + 1)
) => {
	let maxProduct = -Infinity;

	const createSum = (target, currentCombo, start) => {
		if (target === 0) {
			const currentProduct = currentCombo.reduce((a, b) => a * b, 1);

			if (currentProduct > maxProduct) {
				maxProduct = currentProduct;
				bestCombination = currentCombo;
			}
			return;
		}
		if (target < 0) return;

		for (let i = start; i < candidates.length; i++) {
			createSum(target - candidates[i], [...currentCombo, candidates[i]], i);
		}
	};

	createSum(n, [], 0);

	return maxProduct;
};
