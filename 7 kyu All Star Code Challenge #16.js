// https://www.codewars.com/kata/586566b773bd9cbe2b000013

const noRepeat = (str) =>
	Object.entries(
		[...str].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})
	).find(([char, frequency]) => frequency === 1)[0];
