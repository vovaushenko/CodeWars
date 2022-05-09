//2264. Largest 3-Same-Digit Number in String
const largestGoodInteger = (str) => {
	let [i, j, k] = [0, 1, 2];
	let max = -Infinity;

	while (k < str.length) {
		if (str[i] === str[j] && str[j] === str[k])
			max = Math.max(max, Number(`${str[i]}${str[j]}${str[k]}`));
		i++;
		j++;
		k++;
	}

	if (max === 0) return '000';
	if (max === -Infinity) return '';
	return String(max);
};
