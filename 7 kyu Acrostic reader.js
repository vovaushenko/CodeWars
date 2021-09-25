// https://www.codewars.com/kata/59b843b58bcb7766660000f6/train/javascript

const readOut = (acrostic, secretWord = '') =>
	!acrostic.length
		? secretWord
		: readOut(acrostic.slice(1), secretWord + acrostic[0][0]);
