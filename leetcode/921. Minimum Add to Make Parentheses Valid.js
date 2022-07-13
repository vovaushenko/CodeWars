//921. Minimum Add to Make Parentheses Valid
const minAddToMakeValid = (s) => {
	let [open, close] = [0, 0];
	for (const char of s) {
		if (char === '(') {
			open++;
		} else if (!open) {
			close++;
		} else {
			open--;
		}
	}
	return open + close;
};
