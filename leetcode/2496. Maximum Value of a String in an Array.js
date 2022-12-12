//2496. Maximum Value of a String in an Array
/*
The value of an alphanumeric string can be defined as:

The numeric representation of the string in base 10, if it comprises of digits only.
The length of the string, otherwise.
Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

*/

const containsOnlyDigits = (str) =>
	str.replace(/\D+/g, '').length === str.length;

const maximumValue = (strs) => {
	return Math.max(
		...strs.map((str) => {
			if (containsOnlyDigits(str)) {
				return parseInt(str, 10);
			} else {
				return str.length;
			}
		})
	);
};
