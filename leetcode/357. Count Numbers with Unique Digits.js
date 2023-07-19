var countNumbersWithUniqueDigits = function (n) {
	if (n === 0) return 1;
	if (n === 1) return 10;
	if (n > 10) return countNumbersWithUniqueDigits(10);

	return countNumbersWithUniqueDigits(n - 1) + 9 * cmb(10 - n);
};

function cmb(n) {
	var result = 9;
	while (n < 8) {
		result *= n + 1;
		n++;
	}
	return result;
}
