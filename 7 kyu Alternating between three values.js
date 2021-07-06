// https://www.codewars.com/kata/5881460c780e0dd207000084

const spot = (s1, s2) =>
	[...s1].reduce((res, char, id) => (char !== s2[id] && res.push(id), res), []);

console.log(spot('abcdefg', 'abcqetg'));
