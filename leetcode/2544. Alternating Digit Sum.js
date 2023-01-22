const alternateDigitSum = (n) =>
	[...n.toString()]
		.map(Number)
		.map((n, id) => (id % 2 ? -n : n))
		.reduce((a, b) => a + b, 0);
