// https://www.codewars.com/kata/578bf2d8daa01a4ee8000046

const encode = (input) => {
	let prevChar = input[0];
	let repetition = 1;
	let encodedInput = '';

	for (let i = 1; i < input.length + 1; i++) {
		if (input[i] === prevChar) {
			repetition++;
		} else {
			encodedInput += `${repetition}${prevChar}`;
			repetition = 1;
			prevChar = input[i];
		}
	}

	return encodedInput;
};

const decode = (input) => {
	let multiplicator = '';
	let decodedInput = '';
	for (let i = 0; i < input.length; i++) {
		if (/\d/.test(input[i])) {
			multiplicator += input[i];
		} else {
			decodedInput += input[i].repeat(+multiplicator);
			multiplicator = '';
		}
	}
	return decodedInput;
};
