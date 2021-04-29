const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b) || 0;
