// 809. Expressive Words
/*
Sometimes people repeat letters to represent extra feeling. For example:

"hello" -> "heeellooo"
"hi" -> "hiiii"
In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.
Return the number of query strings that are stretchy.
*/
const expressiveWords = (s, words) =>
	words.filter((word) => isExpandable(word, s)).length;

const isExpandable = (W, S) => {
	let j = 0;

	for (let i = 0; i < S.length; i++) {
		if (S[i] === W[j]) j++;
		else if (S[i] === S[i - 1] && S[i - 1] === S[i - 2]) continue;
		else if (S[i] === S[i - 1] && S[i] === S[i + 1]) continue;
		else return false;
	}
	return j === W.length;
};
