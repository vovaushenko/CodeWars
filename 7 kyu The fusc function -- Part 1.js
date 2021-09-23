const fusc = (n) =>
	[0, 1].includes(n)
		? n
		: n % 2 === 0
		? fusc(n / 2)
		: fusc((n - 1) / 2) + fusc((n + 1) / 2);
