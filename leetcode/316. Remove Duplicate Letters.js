//316. Remove Duplicate Letters
/*

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 
*/
const removeDuplicateLetters = (s) => {
	const countObject = {};
	const isInStack = {};
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (!countObject[s[i]]) {
			countObject[s[i]] = 0;
		}
		countObject[s[i]]++;
		isInStack[s[i]] = false;
	}

	for (let i = 0; i < s.length; i++) {
		const currentLetter = s[i];
		let stackTop = stack[stack.length - 1];

		countObject[currentLetter]--;

		if (isInStack[currentLetter]) {
			continue;
		}

		if (currentLetter < stackTop) {
			while (currentLetter < stackTop && countObject[stackTop] > 0) {
				isInStack[stack.pop()] = false;
				stackTop = stack[stack.length - 1];
			}
		}

		isInStack[currentLetter] = true;
		stack.push(currentLetter);
	}
};
