// 1525. Number of Good Ways to Split a String
/*
You are given a string s.

A split is called good if you can split s into two non-empty strings sleft and sright where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same.

Return the number of good splits you can make in s.
*/
const uniqueSize = (str) => new Set([...str]).size;

const numSplits = (str) => {
	const left = {};
	const right = {};

	for (let i = 1; i < str.length; i++) {
		left[i] = uniqueSize(str.slice(0, i));
	}

	const reversed = [...str].reverse();
	for (let i = 1; i < reversed.length; i++) {
		right[i] = uniqueSize(reversed.slice(0, i));
	}

	let count = 0;

	for (let key in left) {
		const rem = str.length - +key;
		if (right[rem] === left[key]) count++;
	}

	return count;
};
