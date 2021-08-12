const LEFT = {
	w: 4,
	p: 3,
	b: 2,
	s: 1,
};

const RIGHT = {
	m: 4,
	q: 3,
	d: 2,
	z: 1,
};

const alphabetWar = (str) => {
	let power;
	if (str.includes('*')) {
		power = str.split('*');

		console.log(power);

		const length = power.length;

		power = power
			.map((c, id) =>
				id === 0
					? c.slice(0, c.length - 1)
					: id === length - 1
					? c.slice(1)
					: c.slice(1, -1)
			)
			.join('')
			.split('');
	} else {
		power = str.split('');
	}

	let leftPower = 0;
	let rightPower = 0;

	for (p of power) {
		if (p in LEFT) leftPower += LEFT[p];
		if (p in RIGHT) rightPower += RIGHT[p];
	}

	return rightPower > leftPower
		? 'Right side wins!'
		: leftPower > rightPower
		? `Left side wins!`
		: `Let's fight again!`;
};
