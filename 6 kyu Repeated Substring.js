// https://www.codewars.com/kata/5491689aff74b9b292000334

const f = (s) => {
	let maxMultiplier = -Infinity;
	let substring = '';
	for (let i = 0; i < s.length + 1; i++) {
		let sbstr = s.slice(0, i);
		let multiplier = s.length / sbstr.length;

		if (multiplier % 1 === 0) {
			if (sbstr.repeat(multiplier) === s) {
				if (multiplier > maxMultiplier) {
					substring = sbstr;
				}
				maxMultiplier = Math.max(multiplier, maxMultiplier);
			}
		}
	}

	return [substring, maxMultiplier];
};
