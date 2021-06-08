// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = (head) => {
	let values = [];

	while (head) {
		values.push(head.val);
		head = head.next;
	}

	return values.join('') === values.reverse().join('');
};
