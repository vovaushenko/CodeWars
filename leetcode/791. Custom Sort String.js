//* 791. Custom Sort String
/*
order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

Return any permutation of str (as a string) that satisfies this property.
*/

const customSortString = (order, str) => {
	let presentInOrder = [];
	let otherChars = [];
	for (let char of str) {
		order.includes(char) ? presentInOrder.push(char) : otherChars.push(char);
	}
	const orderCharIds = [...order].reduce((r, c, id) => ((r[c] = id), r), {});

	presentInOrder.sort((c1, c2) => orderCharIds[c1] - orderCharIds[c2]);

	return presentInOrder.join('') + otherChars.join('');
};
