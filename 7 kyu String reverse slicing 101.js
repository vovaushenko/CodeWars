// https://www.codewars.com/kata/586efc2dcf7be0f217000619

const reverseSlice = (str) => {
	let slicedPlusReversed = [];

	const slicer = (s) => {
		if (!s.length) return;
		slicedPlusReversed.push(s);
		slicer(s.substring(1));
	};

	slicer([...str].reverse().join(''));
	return slicedPlusReversed;
};
