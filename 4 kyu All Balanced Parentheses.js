const balancedParens = (n) => {
	if (!n) return [''];
	const allVariations = [];

	const createVariation = (left, right, variation) => {
		if (!left && !right && variation.length) {
			allVariations.push(variation);
		}
		if (left) createVariation(left - 1, right, variation + '(');
		if (right > left) createVariation(left, right - 1, variation + ')');
	};

	createVariation(n, n, '');
	return allVariations;
};
