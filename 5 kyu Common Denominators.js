const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b) || 0;

const convertFrac = (list, common = list.reduce((c, [_, d]) => lcm(d, c), 1)) =>
	list.map(([x, y]) => `(${(x * common) / y},${common})`).join('');
