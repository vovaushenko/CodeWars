// https://www.codewars.com/kata/585af8f645376cda59000200

const formatPoem = (poem) =>
	poem
		.split('.')
		.map((r) => r.trim())
		.join('.\n')
		.trim();
