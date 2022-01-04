// 1010. Pairs of Songs With Total Durations Divisible by 60
/*
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
*/
//! BRUTE FORCE
const numPairsDivisibleBy60 = (time) => {
	let count = 0;

	for (let i = 0; i < time.length; i++) {
		const first = time[i];
		for (let j = i; j < time.length; j++) {
			if (i !== j) {
				const second = time[j];
				if ((first + second) % 60 === 0) {
					count++;
				}
			}
		}
	}

	return count;
};
