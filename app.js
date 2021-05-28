// https://leetcode.com/problems/determine-if-string-halves-are-alike/

const halvesAreAlike = (s) =>
	vowelsLength(s.slice(0, s.length / 2)) ===
	vowelsLength(s.slice(s.length / 2));

const vowelsLength = (s) =>
	[...s].filter((char) => 'aeiouAEIOU'.includes(char)).length;

console.log(halvesAreAlike('AbCdEfGh'));

// s.slice(0, s.length / 2) s.slice(s.length / 2);
