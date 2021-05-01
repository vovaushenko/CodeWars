// https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

const capitalizeChar = (char) => char.toUpperCase();

const findChildren = (dancingBrigade) =>
	[...dancingBrigade]
		.map((c) => c.toLowerCase())
		.sort()
		.reduce(
			(res, char, id) =>
				res[id - 1] && res[id - 1].toUpperCase() === char.toUpperCase()
					? (res += char)
					: (res += char.toUpperCase()),
			''
		);
