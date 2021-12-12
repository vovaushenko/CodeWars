// 2103. Rings and Rods
/*
There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.
*/

const countPoints = (rings) => {
	let [i, j] = [0, 1];
	const map = {};
	let count = 0;
	while (j < rings.length) {
		map[rings[j]] ? map[rings[j]].push(rings[i]) : (map[rings[j]] = [rings[i]]);
		i += 2;
		j += 2;
	}
	for (let key in map) {
		if (map[key].length >= 3) {
			if (
				map[key].includes('R') &&
				map[key].includes('G') &&
				map[key].includes('B')
			)
				count++;
		}
	}
	return count;
};
