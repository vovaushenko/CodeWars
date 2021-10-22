// https://www.codewars.com/kata/58865bfb41e04464240000b0

const bitsWar = (numbers) => {
	const { odd, even } = numbers.reduce(
		(acc, num) => {
			const power = Math.abs(num).toString(2).replace(/0/g, '').length;
			if (Math.abs(num) % 2 === 0) {
				num > 0 ? (acc['even'] += power) : (acc['even'] -= power);
			} else {
				num > 0 ? (acc['odd'] += power) : (acc['odd'] -= power);
			}
			return acc;
		},
		{ odd: 0, even: 0 }
	);

	return odd > even ? 'odds win' : odd < even ? 'evens win' : 'tie';
};
