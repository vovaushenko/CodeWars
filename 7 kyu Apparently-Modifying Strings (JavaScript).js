// https://www.codewars.com/kata/5b049d57de4c7f6a6c0001d7

const apparently = (str) =>
	str
		.split(' ')
		.reduce(
			(acc, wrd, id, wrds) => (
				['and', 'but'].includes(wrd) && wrds[id + 1] !== 'apparently'
					? acc.push(wrd, 'apparently')
					: acc.push(wrd),
				acc
			),
			[]
		)
		.join(' ');
