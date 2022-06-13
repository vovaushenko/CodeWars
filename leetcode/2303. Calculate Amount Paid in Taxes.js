//2303. Calculate Amount Paid in Taxes

const calculateTax = (brackets, income) => {
	let [totalTax, previous] = [0, 0];

	for (let [upper, percent] of brackets) {
		if (upper > income) {
			upper = income;
		}

		const taxableIncome = upper - previous;

		previous = upper;

		if (taxableIncome > 0) {
			const tax = taxableIncome * (percent / 100);

			totalTax += tax;
		}
	}

	return totalTax;
};
