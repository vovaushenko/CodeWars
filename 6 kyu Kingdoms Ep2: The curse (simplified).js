const decipher = (encryptedWord, vocabulary) => {
	const removedPunctuation = encryptedWord.replace(/[a-zA-Z*]/g, '');

	encryptedWord = encryptedWord.match(/[a-zA-Z*]/g, '').join('');

	for (let word of vocabulary) {
		if (word.length === encryptedWord.length) {
			let count = 0;
			for (let i = 0; i < encryptedWord.length; i++) {
				if (word[i] !== encryptedWord[i] && encryptedWord[i] !== '*') break;
				count++;
			}
			if (count === word.length) return word + removedPunctuation;
		}
	}
};

const translate = (speech, vocabulary) => {
	if (!speech) return '';
	const words = speech.split(' ');
	const translated = [];

	for (let encryptedWord of words) {
		translated.push(decipher(encryptedWord, vocabulary));
	}

	return translated.join(' ');
};
