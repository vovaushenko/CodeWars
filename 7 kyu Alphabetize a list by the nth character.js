// https://www.codewars.com/kata/54eea36b7f914221eb000e2f

const sortIt = (list, n) =>
	list
		.split(', ')
		.sort((w1, w2) => {
			let c1 = w1.toLowerCase().charCodeAt(n - 1);
			let c2 = w2.toLowerCase().charCodeAt(n - 1);
			return c1 === c2 ? w1.localeCompare(w2) : c1 - c2;
		})
		.join(', ');
