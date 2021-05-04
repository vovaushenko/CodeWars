// https://www.codewars.com/kata/585a36b445376cbc22000072

const areaCode = (text) => {
	let [start, end] = [0, text.length - 1];

	while (text[start] !== '(' || text[end] !== ')') {
		if (text[start] !== '(') start++;
		if (text[end] !== ')') end--;
	}

	return text.slice(start + 1, end);
};
