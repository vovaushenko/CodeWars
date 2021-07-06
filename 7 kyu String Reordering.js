// https://www.codewars.com/kata/5b047875de4c7f9af800011b

const sentence = (list) =>
	list
		.map((d) => Object.entries(d))
		.sort((t1, t2) => +t1[0][0] - +t2[0][0])
		.map((tuple) => tuple[0][1])
		.join(' ');
