// https://www.codewars.com/kata/5645fda2956e462b5100005e

const createSequence = (regex) => {
	let res = '';
	let currentNum = 0;
	while (currentNum < 256) {
		if (regex.test(String.fromCharCode(currentNum))) {
			res += String.fromCharCode(currentNum);
		}
		currentNum++;
	}
	return res;
};
