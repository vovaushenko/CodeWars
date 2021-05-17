// https://www.codewars.com/kata/570f6436b29c708a32000826

const firstNonRepeated = (s) =>
	[...s].find((char) => [...s].filter((c) => c === char).length === 1) || null;
// this is not optimal 🤑
