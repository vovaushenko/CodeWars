// https://leetcode.com/problems/reformat-phone-number/
// 1694. Reformat Phone Number
/*
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.
*/

const reformatNumber = (number) => {
	let digits = number.replace(/\D/g, '');

	const chunks = [];

	const helper = (n) => {
		if (n.length <= 4) {
			if (n.length === 4) {
				chunks.push(n.slice(0, 2), n.slice(2));
			} else {
				chunks.push(n);
			}
			return;
		}
		chunks.push(n.slice(0, 3));

		helper(n.slice(3));
	};
	helper(digits);

	return chunks.join('-');
};

console.log(reformatNumber('123 4-567'));
