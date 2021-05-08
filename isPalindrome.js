const isPalindrome = (num) => {
	// Finding the appropriate factor to extract the first digit
	let factor = 1;
	while (num / factor >= 10) {
		factor *= 10;
	}
	while (num) {
		let first = Math.floor(num / factor);
		let last = num % 10;
		// If first and last digit not same return false
		if (first != last) {
			return false;
		}
		// Removing the first and last digit from number
		num = Math.floor((num % factor) / 10);
		// Reducing factor by a factor of 2 as 2 digits are dropped
		factor = factor / 100;
	}
	return true;
};
