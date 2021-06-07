// https://www.codewars.com/kata/5982619d2671576e90000017

const spongeMeme = (str) => {
	let isUpperCase = true;
	let spongifiedStr = '';

	for (let i = 0; i < str.length; i++) {
		if (isUpperCase) {
			spongifiedStr += str[i].toUpperCase();
			isUpperCase = false;
		} else {
			spongifiedStr += str[i].toLowerCase();
			isUpperCase = true;
		}
	}

	return spongifiedStr;
};
