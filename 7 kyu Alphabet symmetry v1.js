// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

const numberOfAdjecentLetters = (str) => {
	let lowercase = str.toLowerCase();
	let adjecentCharsCount = 0;
	let seenCharIds = new Map();

	let [i, j] = [0, 1];
	while (j < lowercase.length) {
		let diff = lowercase[j].charCodeAt(0) - lowercase[i].charCodeAt(0);
		if (diff === 1) {
			if (!seenCharIds.has(i)) adjecentCharsCount++;
			if (!seenCharIds.has(j)) adjecentCharsCount++;

			seenCharIds.set(i, true).set(j, true);
		}

		i++;
		j++;
	}

	return adjecentCharsCount;
};

const solve = (arr) => arr.map((word) => numberOfAdjecentLetters(word));
