const NUMBERS = {
	1: 'One',
	2: 'Two',
	3: 'Three',
	4: 'Four',
	5: 'Five',
	6: 'Six',
	7: 'Seven',
	8: 'Eight',
	9: 'Nine',
	10: 'Ten',
};

const OPERATORS = {
	'+': 'Plus ',
	'-': 'Minus ',
	'*': 'Times ',
	'/': 'Divided By ',
	'**': 'To The Power Of ',
	'=': 'Equals ',
	'!=': 'Does Not Equal ',
};

const expressionOut = (expr) => {
	const [d1, operator, d2] = expr.split(' ');
	if (!(operator in OPERATORS)) return "That's not an operator!";
	return `${NUMBERS[d1]} ${OPERATORS[operator].trim()} ${NUMBERS[d2]}`;
};
