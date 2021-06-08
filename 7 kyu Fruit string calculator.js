// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

const calculate = (str) =>
	eval(
		str
			.split(' ')
			.filter((el) => Number(el) || el === 'loses' || el === 'gains')
			.map((el) => (el === 'loses' ? '-' : el === 'gains' ? '+' : el))
			.join('')
	);
