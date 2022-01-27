//1759. Count Number of Homogenous Substrings
/*
Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.

A string is homogenous if all the characters of the string are the same.

A substring is a contiguous sequence of characters within a string.


*/
const countHomogenous = (s) => {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		let sbstr = '';
		for (let j = i; j < s.length; j++) {
			console.log(sbstr);
			if (!sbstr) {
				count++;
				sbstr += s[j];
			} else {
				if (sbstr[0] !== s[j]) break;
				count++;
			}
		}
	}
	return count % (10 ** 9 + 7);
};
