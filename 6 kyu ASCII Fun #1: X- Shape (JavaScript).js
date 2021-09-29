// https://www.codewars.com/kata/5906436806d25f846400009b

const generateRow = (step, n) =>
	Array(n)
		.fill('□')
		.map((c, id) => (id === step || id === n - 1 - step ? '■' : c))
		.join('');

const x = (n) =>
	Array.from({ length: n }, (_, id) => generateRow(id, n)).join('\n');
