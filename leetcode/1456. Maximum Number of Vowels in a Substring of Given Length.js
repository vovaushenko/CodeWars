// 1456. Maximum Number of Vowels in a Substring of Given Length
/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/
const vowels = (s) => (s.match(/[aeiou]/gi) || []).length;

const maxVowelsBRUTEFORCE = (s, k) => {
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		console.log(s.slice(i, k + i));
		res = Math.max(res, vowels(s.slice(i, k + i)));
	}
	return res;
};

const isVowel = (char) => 'aeiou'.includes(char);

const maxVowels = (s, k) => {
	let [count, maxCount] = [0, 0];

	for (let i = 0; i < s.length; i++) {
		if (isVowel(s[i])) {
			count++;
		}
		if (i >= k && isVowel(s[i - k])) count--;
		maxCount = Math.max(maxCount, count);
	}
	return maxCount;
};
