// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c

String.prototype.eachChar = function (prop) {
	if (typeof prop === 'function')
		return [...this].map((char) => prop(char)).join('');

	return [...this].map((char) => char + prop).join('');
};

console.log(
	'Fool Bar'.eachChar(function (char) {
		if (char == 'l') {
			return char.toUpperCase();
		} else {
			return char;
		}
	})
);
console.log('Fool Bar'.eachChar('⭐'));
