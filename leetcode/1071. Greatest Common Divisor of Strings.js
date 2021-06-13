// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

const gcdOfStrings = (str1, str2) => {
	if (str1 + str2 !== str2 + str1) return '';

	const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

	return str1.substring(0, gcd(str1.length, str2.length));
};
