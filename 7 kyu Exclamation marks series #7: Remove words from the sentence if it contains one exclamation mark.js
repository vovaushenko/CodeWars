// https://www.codewars.com/kata/57fafb6d2b5314c839000195
const remove = (s) =>
	s.split(' ').filter((w) => [...w].filter((c) => c === '!').length !== 1);
