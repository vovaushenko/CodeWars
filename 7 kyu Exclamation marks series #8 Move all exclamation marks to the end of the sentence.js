// https://www.codewars.com/kata/57fafd0ed80daac48800019f

const remove = (s, chars = [...s]) => {
	for (let i = chars.length; i >= 0; i--) {
		chars[i] === '!' && chars.push(chars.splice(i, 1)[0]);
	}
	return chars.join('');
};
