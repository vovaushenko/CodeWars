// https://www.codewars.com/kata/56a628758f8d06b59800000f

const selfDescriptive = (num) => {
	const digits = [...String(num)].map(Number);

	for (let i = 0; i < digits.length; i++) {
		if (digits[i] !== digits.filter((d) => d === i).length) return false;
	}
	return true;
};
