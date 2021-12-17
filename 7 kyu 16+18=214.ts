// https://www.codewars.com/kata/5effa412233ac3002a9e471d

export const add = (n1: number, n2: number): number => {
	const nums = [n1, n2]
		.sort((a, b) => b - a)
		.map((n) => [...String(n)].map(Number));

	let [bigger, smaller] = nums;
	const diff = bigger.length - smaller.length;
	smaller.unshift(...Array(diff).fill(0));

	const res = [];

	for (let i = 0; i < bigger.length; i++) res.push(bigger[i] + smaller[i]);

	return Number(res.join(''));
};
