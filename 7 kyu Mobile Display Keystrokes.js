const KEYS = [
	'1',
	'2abc',
	'3def',
	'4ghi',
	'5jkl',
	'6mno',
	'7pqrs',
	'8tuv',
	'9wxyz',
	'*',
	'0',
	'#',
];

const mobileKeyboard = (str) =>
	[...str]
		.map((key) => KEYS.find((row) => row.includes(key)).indexOf(key) + 1)
		.reduce((a, b) => a + b, 0);
