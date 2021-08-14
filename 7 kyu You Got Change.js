// https://www.codewars.com/kata/5966f6343c0702d1dc00004c

const giveChange = (n) => {
	const bills = [0, 0, 0, 0, 0, 0];
	while (n >= 100) {
		n -= 100;
		bills[5]++;
	}
	while (n >= 50) {
		n -= 50;
		bills[4]++;
	}
	while (n >= 20) {
		n -= 20;
		bills[3]++;
	}
	while (n >= 10) {
		n -= 10;
		bills[2]++;
	}
	while (n >= 5) {
		n -= 5;
		bills[1]++;
	}
	while (n >= 1) {
		n -= 1;
		bills[0]++;
	}

	return bills;
};
