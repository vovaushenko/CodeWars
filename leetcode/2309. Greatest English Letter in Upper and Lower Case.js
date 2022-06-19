//2309. Greatest English Letter in Upper and Lower Case

const greatestLetter = (s) => {
	const seenLetters = {};

	let greatest = null;

	for (let letter of s) {
		if (
			letter.toUpperCase() in seenLetters ||
			letter.toLowerCase() in seenLetters
		) {
			if (
				letter.toLowerCase() in seenLetters &&
				letter.toLowerCase() !== letter
			) {
				letter = letter.toUpperCase();

				if (!greatest) greatest = letter.toUpperCase();

				if (letter.charCodeAt(0) > greatest.charCodeAt(0))
					greatest = letter.toUpperCase();
			}

			if (
				letter.toUpperCase() in seenLetters &&
				letter.toUpperCase() !== letter
			) {
				letter = letter.toUpperCase();

				if (!greatest) greatest = letter.toUpperCase();

				if (letter.charCodeAt(0) > greatest.charCodeAt(0))
					greatest = letter.toUpperCase();
			}
		} else {
			seenLetters[letter] = true;
		}
	}

	return greatest ? greatest : '';
};
