// 8. String to Integer (atoi)

const myAtoi = (s) => {
	const filtered = s.match(/^\s*[-+]?\d+/);
	if (!filtered) {
		return 0;
	}
	return Math.max(
		-Math.pow(2, 31),
		Math.min(Math.pow(2, 31) - 1, Number(filtered))
	);
};
