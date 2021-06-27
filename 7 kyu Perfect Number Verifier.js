// https://www.codewars.com/kata/56a28c30d7eb6acef700004d

function getFactors(num) {
	const isEven = num % 2 === 0;
	const max = Math.sqrt(num);
	const inc = isEven ? 1 : 2;
	let factors = [1, num];

	for (let curFactor = isEven ? 2 : 3; curFactor <= max; curFactor += inc) {
		if (num % curFactor !== 0) continue;
		factors.push(curFactor);
		let compliment = num / curFactor;
		if (compliment !== curFactor) factors.push(compliment);
	}

	return factors;
}

const isPerfect = (n) => {
	if (n === 1) return false;
	const factors = getFactors(n);

	return n === factors.reduce((a, b) => a + b, 0) - n;
};
