// https://www.codewars.com/kata/585af8f645376cda59000200

const formatPoem = (poem) =>
	poem
		.split('.')
		.map((r) => r.trim())
		.join('.\n')
		.trim();

console.log(
	formatPoem(
		'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'
	)
);
