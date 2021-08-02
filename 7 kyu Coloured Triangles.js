// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

const triangle = (row) => {
	if (row.length === 1) return row;

	while (row.length !== 1) {
		let [i, j] = [0, 1];
		let nextRow = '';
		while (j < row.length) {
			nextRow += generateNewColor(row[i], row[j]);
			i++;
			j++;
		}
		row = nextRow;
	}
	return row;
};
// 😁
const generateNewColor = (c1, c2) => {
	switch (c1 + c2) {
		case 'GG':
			return 'G';
		case 'RR':
			return 'R';
		case 'BB':
			return 'B';
		case 'BG':
			return 'R';
		case 'GB':
			return 'R';
		case 'RG':
			return 'B';
		case 'GR':
			return 'B';
		case 'BR':
			return 'G';
		case 'RB':
			return 'G';
	}
};
