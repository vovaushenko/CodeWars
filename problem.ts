// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

const isValid = (word: string, prohibited: string): boolean =>
	[...word].filter((char) => prohibited.includes(char)).length === 0;

const canBeTypedWords = (text: string, broken: string): number =>
	text.split(' ').filter((word) => isValid(word, broken)).length;

export {};
