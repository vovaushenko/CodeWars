// https://www.codewars.com/kata/559d34cb2e65e765b90000f0

const stringSuffix = (str) => {
	let total = 0;
	for (let i = 0; i < str.length; i++) {
		const suffix = str.slice(i);
		total += calculateSimilarity(str, suffix);
	}

	return total;
};

const calculateSimilarity = (fullStr, chunk) => {
	let i = 0;
	let count = 0;

	while (fullStr[i] === chunk[i] && i < fullStr.length) {
		count++;
		i++;
	}

	return count;
};
