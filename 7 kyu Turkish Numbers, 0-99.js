// https://www.codewars.com/kata/5ebd53ea50d0680031190b96

const TURKISH_NUMBERS = {
	0: 'sıfır',
	1: 'bir',
	2: 'iki',
	3: 'üç',
	4: 'dört',
	5: 'beş',
	6: 'altı',
	7: 'yedi',
	8: 'sekiz',
	9: 'dokuz',
	10: 'on',
	20: 'yirmi',
	30: 'otuz',
	40: 'kırk',
	50: 'elli',
	60: 'altmış',
	70: 'yetmiş',
	80: 'seksen',
	90: 'doksan',
};

const getTurkishNumber = (num) => {
	if (num in TURKISH_NUMBERS) return TURKISH_NUMBERS[num];
	const nums = [90, 80, 70, 60, 50, 40, 30, 20, 10];
	let turkishNumber = '';

	for (let breakpoint of nums) {
		if (num - breakpoint >= 0) {
			num -= breakpoint;
			turkishNumber += TURKISH_NUMBERS[breakpoint];
		}
	}

	turkishNumber += num && ` ${TURKISH_NUMBERS[num]}`;
	return turkishNumber;
};
