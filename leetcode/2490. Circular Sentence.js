//2490. Circular Sentence
/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false.
*/

const areCircularWords = (w1, w2) => w1[w1.length - 1] === w2[0];

const isCircularSentence = (sentence) => {
	const words = sentence.split(' ');
	if (words.length === 1) return areCircularWords(words[0], words[0]);
	let [i, j] = [0, 1];
	while (j < words.length) {
		const [w1, w2] = [words[i], words[j]];
		if (!areCircularWords(w1, w2)) return false;
		i++;
		j++;
	}
	return true;
};
