// https://www.codewars.com/kata/551e949bbf4e52c106000aed/train/javascript

const mapEmUp = (input, mappers) =>
	input.map((num) =>
		mappers.find((m) => m[0](num)) ? mappers.find((m) => m[0](num))[1](num) : -1
	);
