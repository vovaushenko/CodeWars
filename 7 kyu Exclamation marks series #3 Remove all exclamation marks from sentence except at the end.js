// https://www.codewars.com/kata/57faefc42b531482d5000123

const remove = (str, stopAddingExc = false) =>
	[...str]
		.reduceRight((res, char) => {
			if (char !== '!') stopAddingExc = true;

			if (char === '!') {
				stopAddingExc ? null : res.push(char);
			} else {
				res.push(char);
			}

			return res;
		}, [])
		.reverse()
		.join('');
