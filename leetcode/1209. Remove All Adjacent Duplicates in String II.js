// 1209. Remove All Adjacent Duplicates in String II
/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
*/

// == brute force ==
const hasKadj = (chunk) => [...new Set(chunk)].length === 1;

const containsKadjecent = (s, k) => {
	for (let i = 0; i < s.length; i++) {
		const chunk = s.slice(i, k + i);
		if (chunk.length === k && hasKadj(chunk)) return true;
	}

	return false;
};

const removeDuplicates = (str, k) => {
	if (!containsKadjecent(str, k)) return str;
	let res = '';
	const helper = (s) => {
		if (s.length <= k) {
			res = s;
			return;
		}

		let newStr = '';

		for (let i = 0; i < str.length; i++) {
			const chunk = s.slice(i, k + i);

			if (chunk.length === k && hasKadj(chunk)) {
				newStr = s.slice(0, i) + s.slice(i + k);
				break;
			}
		}
		if (newStr) helper(newStr);
	};

	helper(str);
	return res;
};

console.log(removeDuplicates('pbbcggttciiippooaais', 2));
