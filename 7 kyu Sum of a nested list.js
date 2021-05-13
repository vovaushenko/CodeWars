// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018

const sumNested = (arr) => {
	let sum = 0;

	const deepFlat = (array) =>
		array.forEach((element) =>
			Array.isArray(element) ? deepFlat(element) : (sum += element)
		);

	deepFlat(arr);

	return sum;
};
