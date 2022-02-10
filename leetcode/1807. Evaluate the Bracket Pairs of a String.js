//1807. Evaluate the Bracket Pairs of a String
/*
You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.

For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain the keys "name" and "age".
You know the values of a wide range of keys. This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will:

Replace keyi and the bracket pair with the key's corresponding valuei.
If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark "?" (without the quotation marks).
Each key will appear at most once in your knowledge. There will not be any nested brackets in s.

Return the resulting string after evaluating all of the bracket pairs.
*/

const evaluate = (s, knowledge) => {
	const map = knowledge.reduce((h, [name, val]) => ((h[name] = val), h), {});
	let res = '';
	let start = false;
	let key = '';

	for (let char of s) {
		if (char === '(') {
			start = true;
		} else if (char === ')') {
			res += map[key] || '?';
			key = '';
			start = false;
		} else {
			start ? (key += char) : (res += char);
		}
	}

	return res;
};
