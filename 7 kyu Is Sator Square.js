// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript

const isSatorSquare = (tablet) => {
	let [i, j] = [0, tablet.length - 1];
	while (i < j) {
		if (tablet[i].join('') !== [...tablet[j]].reverse().join('')) return false;
		i++;
		j--;
	}
	for (let k = 0; k < tablet.length; k++) {
		let row = tablet[k].join('');
		let column = tablet.reduce((c, row) => c + row[k], '');

		if (row !== column) return false;
	}

	return true;
};
