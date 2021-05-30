// https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b

const hasSubpattern = (str) => {
	for (let i = 0; i <= str.length / 2; i++) {
		let substring = str.slice(0, i);
		let repeat = str.length / i;

		if (repeat % 1 === 0) {
			if (substring.repeat(repeat) === str) return true;
		}
	}

	return false;
};
