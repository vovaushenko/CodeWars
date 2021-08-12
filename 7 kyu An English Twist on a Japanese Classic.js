// https://www.codewars.com/kata/5b04be641839f1a0ab000151

const shiritori = (words) => {
	let [i, j] = [0, 1];
	const valid = [];

	while (j < words.length) {
		if (i === 0 && !words[i]) return [];

		if (validWords(words[i], words[j])) {
			valid.push(words[i]);
			if (j === words.length - 1) valid.push(words[j]);
		} else {
			valid.push(words[i]);
			break;
		}
		i++;
		j++;
	}

	return valid;
};

const validWords = (w1, w2) => w1[w1.length - 1] === w2[0];
