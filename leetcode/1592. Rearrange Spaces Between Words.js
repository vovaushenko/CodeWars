// 1592. Rearrange Spaces Between Words
/*
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.
*/

const getSpaceCount = (text) => text.replace(/\S/g, '').length;
const getWords = (text) => text.split(' ').filter((w) => w);

const reorderSpaces = (text) => {
	const spacesCount = getSpaceCount(text);
	const words = getWords(text);
	if (words.length === 1) return words[0] + ' '.repeat(spacesCount);

	const spaceStep = Math.floor(spacesCount / (words.length - 1));
	const spacesLeft = spacesCount - (words.length - 1) * spaceStep;

	return words.join(' '.repeat(spaceStep)) + ' '.repeat(spacesLeft);
};
