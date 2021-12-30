// 1450. Number of Students Doing Homework at a Given Time
/*
Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
*/
const isInRange = (min, max, q) => q >= min && q <= max;

const busyStudent = (startTime, endTime, queryTime) => {
	let count = 0;
	startTime.forEach((start, i) => {
		if (isInRange(start, endTime[i], queryTime)) count++;
	});
	return count;
};
