// https://www.codewars.com/kata/55a243393fb3e87021000198

const remember = (str) => {
	const map = {};
	const added = {};
	const repeated = [];
	for (let char of str) {
		map[char] ? map[char]++ : (map[char] = 1);
		if (map[char] > 1 && !(char in added)) {
			repeated.push(char);
			added[char] = true;
		}
	}

	return repeated;
};
