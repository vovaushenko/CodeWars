const MAP: Record<string, number> = {
	I: 1,

	IV: 4,

	V: 5,

	IX: 9,

	X: 10,

	XL: 40,

	L: 50,

	XC: 90,

	C: 100,

	CD: 400,

	D: 500,

	CM: 900,

	M: 1000,
};

const intToRoman = (num: number): string => {
	const values = Object.values(MAP).reverse();

	const reverseMap = Object.entries(MAP).reduce((map, [key, value]) => {
		map[value] = key;

		return map;
	}, {} as Record<string, string>);

	const romanDigits: string[] = [];

	const transform = (n: number): void => {
		if (n === 0 || n < 0) return;

		const smaller = values.find((digit) => digit <= n);

		const romanDigit = reverseMap[smaller!];

		romanDigits.push(romanDigit);

		transform(n - smaller!);
	};

	transform(num);

	return romanDigits.join('');
};
