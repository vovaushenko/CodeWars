// https://www.codewars.com/kata/577e277c9fb2a5511c00001d

const vowelShift = (text, n) => {
	if (!text) return text;
	let letters = [...text];
	const vowels = [...text].filter((c) => /[aeiou]/gi.test(c));
	let counter = 0;

	if (n > 0) {
		while (counter < n) {
			vowels.unshift(vowels.pop());
			counter++;
		}
	} else {
		while (counter < Math.abs(n)) {
			vowels.push(vowels.shift());
			counter++;
		}
	}

	for (let i = 0; i < letters.length; i++) {
		if (/[aeiou]/gi.test(letters[i])) {
			letters[i] = vowels[0];
			vowels.shift();
		}
	}

	return letters.join('');
};
