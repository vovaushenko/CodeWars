const isPalindrome = (str) => {
	let [i, j] = [0, str.length - 1];
	while (i < j) {
		if (str[i] !== str[j]) return false;
		i++;
		j--;
	}
	return true;
};
