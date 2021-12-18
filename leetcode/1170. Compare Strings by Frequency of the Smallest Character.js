// 1170. Compare Strings by Frequency of the Smallest Character
/*
Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

Return an integer array answer, where each answer[i] is the answer to the ith query.
*/
const frequencyOfSmallestChar = (str) => {
	let smallestChar = str[0];
	const frequencyMap = {};
	for (let char of str) {
		frequencyMap[char] ? frequencyMap[char]++ : (frequencyMap[char] = 1);
		if (char < smallestChar) smallestChar = char;
	}

	return { smallestChar, frequency: frequencyMap[smallestChar] };
};

const numSmallerByFrequency = (queries, words) => {
	const queryMap = {};
	const wordsMap = {};
	for (let qr of queries) queryMap[qr] = frequencyOfSmallestChar(qr);
	for (let wrd of words) wordsMap[wrd] = frequencyOfSmallestChar(wrd);

	const res = [];

	for (let query of queries) {
		let counter = 0;
		for (let wrd of words) {
			if (wordsMap[wrd].frequency > queryMap[query].frequency) counter++;
		}
		res.push(counter);
	}

	return res;
};
