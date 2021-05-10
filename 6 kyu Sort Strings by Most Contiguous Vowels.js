// https://www.codewars.com/kata/5d2d0d34bceae80027bffddb

const calculateMaxContVowelLength = (str) => {
	const vowels = 'aeiouAEIOU ';
	let tempLength = 0;
	let maxLength = -Infinity;
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			tempLength++;
			maxLength = Math.max(tempLength, maxLength);
		} else {
			tempLength = 0;
		}
	}
	return maxLength;
};

const sortStringsByVowels = (strings) =>
	strings.sort((s1, s2) => {
		let maxVovelLength1 = calculateMaxContVowelLength(s1);
		let maxVovelLength2 = calculateMaxContVowelLength(s2);

		if (maxVovelLength1 !== maxVovelLength2) {
			return maxVovelLength1 > maxVovelLength2 ? -1 : 1;
		}
	});
