const stringsInMaxDepth = (s) => {
	if (!s.length) return [''];
	let greatestDepth = 0;
	let currDepth = 0;
	for (let char of s) {
		if (char === '(') {
			currDepth++;
			greatestDepth = Math.max(currDepth, greatestDepth);
		} else if (char === ')') {
			currDepth--;
		}
	}
	let solution = '';

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char === '(') {
			currDepth++;
		} else if (char === ')') {
			currDepth--;
		}
		if (currDepth === greatestDepth && char !== '(') {
			solution += char;
		}

		if (currDepth === greatestDepth && s[i + 1] === ')') {
			solution += ' ';
		}
	}

	const res = solution.split(' ');
	if (res[res.length - 1] === '') res.pop();

	return res;
};
