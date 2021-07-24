const gcd = (x, y) => (y ? gcd(y, x % y) : x);

const calculateRatio = (w, h) => {
	if (!w || !h) throw new Error('🙃');
	return `${w / gcd(w, h)}:${h / gcd(w, h)}`;
};
