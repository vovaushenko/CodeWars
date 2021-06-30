// https://www.codewars.com/kata/57366eaae7f8d2df290003e8

const uniDecoder = (...nums) =>
	nums.reduce(
		(res, n) =>
			typeof n === 'number' ? res + String.fromCharCode(n) : res + '',
		''
	) || 'not a valid character code';
