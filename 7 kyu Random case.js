// https://www.codewars.com/kata/57073869924f34185100036d

const randomCase = (s) =>
	[...s]
		.map((c) => (Math.random() * 5 > 2 ? c.toUpperCase() : c.toLowerCase()))
		.join('');
