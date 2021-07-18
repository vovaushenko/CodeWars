// https://www.codewars.com/kata/59473c0a952ac9b463000064/

const LEFT = { w: 4, p: 3, b: 2, s: 1, t: 0 };
const RIGHT = { m: 4, q: 3, d: 2, z: 1, j: 0 };
const RELATION = {
	m: 'w',
	w: 'm',
	p: 'q',
	q: 'p',
	b: 'd',
	d: 'b',
	s: 'z',
	z: 's',
	t: 'j',
	j: 't',
};

const alphabetWar = (fight) => {
	fight = [...fight];
	for (let i = 0; i < fight.length; i++) {
		if (fight[i] === 't') {
			if (fight[i - 1] && fight[i - 1] in RIGHT)
				fight[i - 1] = RELATION[fight[i - 1]];
			if (fight[i + 1] && fight[i + 1] in RIGHT)
				fight[i + 1] = RELATION[fight[i + 1]];
		}
		if (fight[i] === 'j') {
			if (fight[i - 1] && fight[i - 1] in LEFT)
				fight[i - 1] = RELATION[fight[i - 1]];
			if (fight[i + 1] && fight[i + 1] in LEFT)
				fight[i + 1] = RELATION[fight[i + 1]];
		}
	}

	let power = fight.reduce(
		(pow, c) => (
			c in LEFT
				? (pow.leftPower += LEFT[c])
				: c in RIGHT
				? (pow.rightPower += RIGHT[c])
				: '',
			pow
		),
		{ leftPower: 0, rightPower: 0 }
	);

	return power.leftPower > power.rightPower
		? 'Left side wins!'
		: power.leftPower < power.rightPower
		? 'Right side wins!'
		: "Let's fight again!";
};
