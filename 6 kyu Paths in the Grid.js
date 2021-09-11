// https://www.codewars.com/kata/56a127b14d9687bba200004d

const calculate = (m, n, memo = {}) => {
	if (`${m}*${n}` in memo) return memo[`${m}*${n}`];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	const rightMove = calculate(m - 1, n, memo);
	memo[`${m - 1}*${n}`] = rightMove;
	const downMove = calculate(m, n - 1, memo);
	memo[`${m}*${n - 1}`] = downMove;
	return rightMove + downMove;
};

const numberOfRoutes = (x, y) => calculate(x + 1, y + 1);
console.log(numberOfRoutes(1, 1));
