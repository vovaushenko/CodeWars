//401. Binary Watch
/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".
*/
const readBinaryWatch = (num) => {
	const output = [];

	for (let h = 0; h < 12; h++) {
		for (let m = 0; m < 60; m++) {
			const ones = Number(h * 64 + m)
				.toString(2)
				.split('')
				.filter((d) => d === '1').length;
			if (ones === num) output.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`);
		}
	}

	return output;
};
