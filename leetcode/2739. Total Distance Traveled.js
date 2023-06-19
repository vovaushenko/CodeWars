/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
	let total = 0;
	let interval = 0;

	while (mainTank) {
		mainTank--;
		interval++;
		if (interval === 5 && additionalTank) {
			additionalTank--;
			interval = 0;
			mainTank++;
		}
		total += 10;
	}

	return total;
};
