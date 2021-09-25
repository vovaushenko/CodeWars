// 22. Generate Parentheses
/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

const generateParenthesis = (n) => {
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
