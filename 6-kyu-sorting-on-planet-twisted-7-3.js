//6 kyu Sorting on planet Twisted-3-7

const alienNum = (num) => {
	const MAP = {
		3: 7,
		7: 3,
	};
	const newNum = [...String(num)]
		.map((digit) => (digit in MAP ? MAP[digit] : digit))
		.join('');

	return Number(newNum);
};

const sortTwisted37 = (arr) =>
	[...arr].sort((a, b) => alienNum(a) - alienNum(b));
s;
