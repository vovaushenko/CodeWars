const isPalindrome = (str) => [...str].reverse().join('') === str;

const longestPalindromicSubstring = (string) => {
	let longestPalindrome = '';

	for (let i = 0; i < string.length; i++) {
		let currentChunk = '';
		for (let j = i; j < string.length; j++) {
			currentChunk += string[j];
			if (
				isPalindrome(currentChunk) &&
				currentChunk.length > longestPalindrome.length
			)
				longestPalindrome = currentChunk;
		}
	}

	return longestPalindrome;
};
