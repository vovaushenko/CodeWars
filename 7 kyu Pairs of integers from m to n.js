// https://www.codewars.com/kata/588e2a1ad1140d31cb00008c

const generatePairs = (m, n) => {
	const allPairs = [];
	let [currentBase, maxBase] = [m, m];

	while (currentBase < n) {
		allPairs.push([currentBase, maxBase]);
		maxBase++;
		if (maxBase === n) {
			allPairs.push([currentBase, maxBase]);
			currentBase++;
			maxBase = currentBase;
		}
	}

	allPairs.push([n, n]);
	return allPairs;
};
