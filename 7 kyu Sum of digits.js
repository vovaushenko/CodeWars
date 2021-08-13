// https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

const sum = (num) =>
	num !== undefined
		? `${[...(num + '')].join(' + ')} = ${[...(num + '')].reduce(
				(s, d) => s + +d,
				0
		  )}`
		: '';
