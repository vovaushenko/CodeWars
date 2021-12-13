const maxPower = (s) => {
	let prevChar = null;
	let maxPower = 1;
	let currentPower = 1;
	const helper = (str) => {
		if (!str.length) return;
		let currentChar = str[0];
		if (currentChar === prevChar) {
			currentPower++;
			maxPower = Math.max(currentPower, maxPower);
		} else {
			currentPower = 1;
		}
		prevChar = currentChar;
		helper(str.substring(1));
	};
	helper(s);
	return maxPower;
};

console.log(maxPower('hooraaaaaaaaaaay'));
