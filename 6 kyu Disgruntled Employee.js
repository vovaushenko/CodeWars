// 6 kyu
// Disgruntled Employee

const generateSquareNums = (limit) =>
	Array.from({ length: limit }, (_, i) => (++i) ** 2);

const off = (n) => generateSquareNums(n).filter((sq) => sq <= n);
