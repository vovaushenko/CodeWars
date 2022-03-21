const runLengthEncoding = (str) => {
	let stack = [];
	let res = '';

	for (const char of str) {
		if (!stack.length || stack[stack.length - 1] === char) {
			stack.push(char);
			if (stack.length === 9) {
				res += `${stack.length}${stack[stack.length - 1]}`;
				stack = [];
			}
		} else {
			res += `${stack.length}${stack[stack.length - 1]}`;
			stack = [char];
		}
	}
	if (stack.length) {
		res += `${stack.length}${stack[stack.length - 1]}`;
	}
	return res;
};
