// https://www.codewars.com/kata/53f211b159c3fcec3d000efa

const left$ = (str, i = 1) => {
	if (typeof i === 'string') i = str.indexOf(i);
	return str.slice(0, i);
};
const right$ = (str, i = 1) => {
	if (!i) return '';
	if (typeof i === 'string') i = str.length - str.lastIndexOf(i) - i.length;
	return i ? str.slice(-i) : '';
};
