// 1360. Number of Days Between Two Dates
/*
Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
*/

const daysBetweenDates = (date1, date2) =>
	Math.abs(new Date(date1) - new Date(date2)) / 86400000;
