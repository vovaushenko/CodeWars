//168. Excel Sheet Column Title
/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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
const convertToTitle = (n) => {
	let map = {
		0: 'Z',
		1: 'A',
		2: 'B',
		3: 'C',
		4: 'D',
		5: 'E',
		6: 'F',
		7: 'G',
		8: 'H',
		9: 'I',
		10: 'J',
		11: 'K',
		12: 'L',
		13: 'M',
		14: 'N',
		15: 'O',
		16: 'P',
		17: 'Q',
		18: 'R',
		19: 'S',
		20: 'T',
		21: 'U',
		22: 'V',
		23: 'W',
		24: 'X',
		25: 'Y',
	};

	if (n <= 26) return map[n % 26];

	let title = '';

	while (n) {
		let r = n % 26;
		n = Math.floor(n / 26);
		if (r === 0) {
			r = 0;
			n = n - 1;
		}
		title = map[r] + title;
	}

	return title;
};
