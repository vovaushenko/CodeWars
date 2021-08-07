//* 1936. Add Minimum Number of Rungs

/*
You are given a strictly increasing integer array rungs that represents the height of rungs on a ladder. You are currently on the floor at height 0, and you want to reach the last rung.

You are also given an integer dist. You can only climb to the next highest rung if the distance between where you are currently at (the floor or on a rung) and the next rung is at most dist. You are able to insert rungs at any positive integer height if a rung is not already there.

Return the minimum number of rungs that must be added to the ladder in order for you to climb to the last rung.
*/

const addRungs = (rungs, dist) => {
	let jumps = [];
	if (dist - rungs[0] < 0) {
		jumps.push(rungs[0]);
	}

	let [i, j] = [0, 1];
	while (j < rungs.length) {
		if (rungs[j] - rungs[i] > dist) jumps.push(rungs[j] - rungs[i]);
		i++;
		j++;
	}

	return jumps.reduce((r, j) => r + calculateJumps(j, dist), 0);
};

const calculateJumps = (dist, jump) => {
	let jumps = 0;
	while (dist > jump) {
		dist -= jump;
		jumps++;
	}
	return jumps;
};
