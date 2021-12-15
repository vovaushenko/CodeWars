// Naive

const isEven = (n) => !(n % 2);

const getNumberStrength = (n) => {
	let strength = 0;
	while (isEven(n)) {
		strength++;
		n /= 2;
	}
	return strength;
};

const strongestEven = (n, m) => {
	console.log(n);
	const evens = Array.from({ length: m - n + 1 }, (_, id) => id + n)
		.filter(isEven)
		.map((n) => ({ strength: getNumberStrength(n), num: n }));

	const maxStrength = Math.max(...evens.map((n) => n.strength));

	const strongest = evens.filter((n) => n.strength === maxStrength);

	return strongest[0].num;
};
