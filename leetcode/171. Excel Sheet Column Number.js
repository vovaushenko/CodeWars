//171. Excel Sheet Column Number
/*
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

*/
'use strict';

const titleToNumber = (s) => {
	let res = 0;
	for (let i = s.length - 1, powerOf26 = 1; i >= 0; i--, powerOf26 *= 26) {
		res += powerOf26 * (s.charCodeAt(i) - 64);
	}

	return res;
};
