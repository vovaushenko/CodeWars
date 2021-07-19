// https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// 1935. Maximum Number of Words You Can Type
/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
*/

const isValid = (word: string, prohibited: string): boolean =>
	[...word].filter((char) => prohibited.includes(char)).length === 0;

const canBeTypedWords = (text: string, broken: string): number =>
	text.split(' ').filter((word) => isValid(word, broken)).length;
