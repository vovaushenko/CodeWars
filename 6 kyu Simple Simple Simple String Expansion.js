// https://www.codewars.com/kata/5ae326342f8cbc72220000d2

const stringExpansion = (str) => {
	let expandedStr = '';
	let multiplicator = 1;
	for (let i = 0; i < str.length; i++) {
		if (!isLetter(str[i])) {
			multiplicator = +str[i];
		}

		if (isLetter(str[i])) expandedStr += str[i].repeat(multiplicator);
	}

	return expandedStr;
};

let isLetter = (char) => /[a-z]/i.test(char);
