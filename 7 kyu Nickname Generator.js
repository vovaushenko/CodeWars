// https://www.codewars.com/kata/593b1909e68ff627c9000186

const nickname = (name) =>
	name.length > 4
		? 'aeiou'.includes(name[2])
			? name.slice(0, 4)
			: name.slice(0, 3)
		: 'Error: Name too short';
