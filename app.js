// https://leetcode.com/problems/longest-nice-substring/

const isNice = (str) => {
	if (str.length < 2) return false;
	let uniqueChars = [...new Set([...str])];
	const lowercase = uniqueChars.filter((c) => c.toUpperCase() !== c);
	const upppercase = uniqueChars.filter((c) => c.toLowerCase() !== c);
	for (let char of lowercase) {
		if (!uniqueChars.includes(char.toUpperCase())) {
			return false;
		}
	}
	for (let char of upppercase) {
		if (!uniqueChars.includes(char.toLowerCase())) {
			return false;
		}
	}

	return true;
};

const longestNiceSubstring = (s) => {
	let maxLength = 0;
	let longest = '';

	for (let i = 0; i < s.length; i++) {
		let tempStr = '';
		for (let j = i; j < s.length; j++) {
			tempStr += s[j];
			if (isNice(tempStr)) {
				if (tempStr.length > maxLength) {
					longest = tempStr;
				}
				maxLength = Math.max(maxLength, tempStr.length);
			}
		}
	}

	return longest;
};

console.log(longestNiceSubstring('qQUjJ'));
