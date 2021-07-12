const countPalindromicSubsequence = (s) => {
	const palindromes = {};
	let seen = {};
	let palindromeCount = 0;
	const boundary = [...s].reduce(
		(b, c, id) => (b[c] ? b[c].push(id) : (b[c] = [id]), b),
		{}
	);

	for (let key in boundary) {
		let ids = boundary[key];
		boundary[key] = [Math.min(...ids), Math.max(...ids)];
	}

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (!seen[char]) {
			let [start, finish] = boundary[char];
			if (start === finish) continue;

			let chunk = s.slice(start + 1, finish);

			for (let letter of chunk) {
				let currentPalindrome = `${char}${letter}${char}`;
				if (!(currentPalindrome in palindromes)) {
					palindromeCount++;
					palindromes[currentPalindrome] = true;
				}
			}
			seen[char] = true;
		}
	}
	return palindromeCount;
};

countPalindromicSubsequence('aabca');
