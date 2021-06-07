// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

/*
1190. Reverse Substrings Between Each Pair of Parentheses
You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.
*/

const reverseParentheses = (str) => {
	let stack = [[]];

	for (let char of str) {
		if (char === '(') {
			stack.push([]);
		} else if (char === ')') {
			const reverse = stack.pop().reverse();
			stack[stack.length - 1].push(...reverse);
		} else {
			stack[stack.length - 1].push(char);
		}
	}

	return stack[0].join('');
};
