// 2575. Find the Divisibility Array of a String
const divisibilityArray = (word, m) => {
	const ans = [];

	let num = 0,
		carry = 0;

	for (let i = 0; i < word.length; i++) {
		num = Number(carry + word[i]);
		carry = num % m;
		ans.push(carry ? 0 : 1);
	}

	return ans;
};
