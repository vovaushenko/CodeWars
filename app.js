const maxDepth = (s) => {
	let maxDepth = 0;
	let currentDepth = 0;
	for (let char of s) {
		if (char === '(') currentDepth++;
		if (char === ')') currentDepth--;
		maxDepth = Math.max(maxDepth, currentDepth);
	}

	return maxDepth;
};
