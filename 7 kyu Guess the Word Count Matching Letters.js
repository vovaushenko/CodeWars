// https://www.codewars.com/kata/5912ded3f9f87fd271000120

const countCorrectCharacters = (w1, w2) => {
	if (w1.length !== w2.length) throw new Error('😠');
	return [...w1].filter((char, id) => w2[id] === char).length;
};
