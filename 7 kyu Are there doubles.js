// https://www.codewars.com/kata/56a24b4d9f3671584d000039

const doubleCheck = (str) => {
	str = str.toLowerCase();
	let [i, j] = [0, 1];
	while (j < str.length) {
		if (str[i] === str[j]) return true;
		i++;
		j++;
	}

	return false;
};
