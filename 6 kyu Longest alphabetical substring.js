// https://www.codewars.com/kata/5a7f58c00025e917f30000f1

const charPosition = (char) => char.charCodeAt(0);

const longest = (str) => {
	if (str.length === 1) return str;
	const substrings = [];
	let tempStr = str[0];

	for (let i = 1; i < str.length; i++) {
		if (charPosition(str[i]) >= charPosition(str[i - 1])) {
			tempStr += str[i];
		} else {
			substrings.push(tempStr);
			tempStr = str[i];
		}

		if (i === str.length - 1) {
			substrings.push(tempStr);
		}
	}

	substrings.sort((a, b) => b.length - a.length);
	return substrings[0];
};
