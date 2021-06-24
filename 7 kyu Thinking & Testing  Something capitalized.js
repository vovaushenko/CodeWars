// https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript

const testit = (s) => {
	console.log(s);
	return s
		.split(' ')
		.map((c) =>
			c.length === 1
				? c.toUpperCase()
				: c.slice(0, c.length - 1) + c.slice(c.length - 1).toUpperCase()
		)
		.join(' ');
};
