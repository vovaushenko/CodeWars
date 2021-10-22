// https://www.codewars.com/kata/58856a06760b85c4e6000055

const bitsBattle = (numbers) => {
	const { odd, even } = numbers.reduce(
		(acc, num) => {
			num % 2 === 0
				? (acc['even'] += num.toString(2).replace(/1/g, '').length)
				: (acc['odd'] += num.toString(2).replace(/0/g, '').length);
			return acc;
		},
		{ odd: 0, even: 0 }
	);

	return odd > even ? 'odds win' : odd < even ? 'evens win' : 'tie';
};
