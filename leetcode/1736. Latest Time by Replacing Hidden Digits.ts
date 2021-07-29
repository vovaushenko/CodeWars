// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
//* 1736. Latest Time by Replacing Hidden Digits
/*
You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits.
*/

const maximumTime = (time: string): string => {
	let [hours, minutes] = time.split(':');
	return `${getMaxHours(hours)}:${getMaxMinutes(minutes)}`;
};

const getMaxHours = (hours: string): string => {
	let [firstDigit, secondDigit] = [hours[0], hours[1]];
	if (hours === '??') return '23';

	if (firstDigit === '?') {
		Number(secondDigit) <= 3 ? (firstDigit = '2') : (firstDigit = '1');
	}

	if (secondDigit === '?') {
		Number(firstDigit) < 2 ? (secondDigit = '9') : (secondDigit = '3');
	}

	return firstDigit + secondDigit;
};

const getMaxMinutes = (minutes: string) => {
	if (minutes === '??') return '59';
	let [firstDigit, secondDigit] = [minutes[0], minutes[1]];
	if (firstDigit === '?') {
		firstDigit = '5';
	}
	if (secondDigit === '?') {
		secondDigit = '9';
	}

	return firstDigit + secondDigit;
};
