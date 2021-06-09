// https://leetcode.com/problems/break-a-palindrome/

const breakPalindrome = (pal) => {
	if (pal.length === 1) return '';
	let letters = [...pal];
	let smallest = [];
	for (let i = 0; i < letters.length; i++) {
		let storedChar = letters[i];
		letters[i] = 'a';
		if (!isPalindrome(letters.join(''))) {
			smallest.push(letters.join(''));
		}
		if (i > 0) {
			letters[i] = 'b';
			if (!isPalindrome(letters.join(''))) {
				smallest.push(letters.join(''));
			}
		}
		letters[i] = storedChar;
	}
	smallest = smallest.sort();

	return smallest[0];
};

const isPalindrome = (str) => {
	let [i, j] = [0, str.length - 1];
	while (i < j) {
		if (str[i] !== str[j]) return false;
		i++;
		j--;
	}

	return true;
};
