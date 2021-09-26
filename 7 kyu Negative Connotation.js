// https://www.codewars.com/kata/5ef0456fcd067000321baffa

const connotation = (str) => {
	const { positive, negative } = str
		.split(' ')
		.filter((w) => w)
		.reduce(
			(map, wrd) => {
				isInFirstHalf(wrd[0].toLowerCase())
					? map['positive']++
					: map['negative']++;
				return map;
			},
			{
				positive: 0,
				negative: 0,
			}
		);

	return positive > negative;
};

const isInFirstHalf = (char) =>
	char.charCodeAt(0) > 96 && char.charCodeAt(0) < 110;
