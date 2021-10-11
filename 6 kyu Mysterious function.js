const getNum = (n) =>
	[...String(n)].reduce(
		(acc, d) => ('069'.includes(d) ? acc + 1 : d === '8' ? acc + 2 : acc + 0),
		0
	);
