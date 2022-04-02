const isOpeningBracket = (bracket) => '([{'.includes(bracket);
const isBracket = (char) => '([{}])'.includes(char);

const balancedBrackets = (string) => {
	string = [...string].filter(isBracket);

	const BRACKET_COMPLEMENT = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	const stack = [];

	for (const bracket of string) {
		if (isOpeningBracket(bracket)) {
			stack.push(bracket);
		} else {
			const lastOpeningBracket = stack.pop();
			const complementBracket = BRACKET_COMPLEMENT[lastOpeningBracket];
			if (complementBracket !== bracket) return false;
		}
	}

	return stack.length === 0;
};
