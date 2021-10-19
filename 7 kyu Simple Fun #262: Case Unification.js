const caseUnification = (s) => {
	const { lower, upper } = [...s].reduce(
		(acc, c) => (/[a-z]/.test(c) ? acc.lower++ : acc.upper++, acc),
		{ lower: 0, upper: 0 }
	);
	return upper > lower ? s.toUpperCase() : s.toLowerCase();
};
