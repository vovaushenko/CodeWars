const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b) || 0;

console.log(lcm(15, 18));

const sumDifferencesBetweenProductsAndLCMs = (pairs) =>
	pairs.reduce(
		(res, [n1, n2]) => res + n1 * n2 - lcm(n1, n2),
		0
	);

console.log(
	sumDifferencesBetweenProductsAndLCMs([
		[15, 18],
		[4, 5],
		[12, 60],
	])
);

console.log(gcd(0, 0));
