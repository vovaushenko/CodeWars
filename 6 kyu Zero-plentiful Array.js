// https://www.codewars.com/kata/59e270da7997cba3d3000041/train/javascript

const zeroPlentiful = (arr) => {
	if (!isZeroPlentiful(arr)) return 0;
	let count = 0;

	const helper = (sequence) => {
		if (!sequence.includes('0000')) return;
		if (!isZeroPlentiful(arr)) return 0;

		count++;
		helper(sequence.replace('0000', ''));
	};

	helper(arr.join(''));

	return count;
};

const isZeroPlentiful = (arr) =>
	arr
		.join('')
		.replace(/[-1-9]/g, ' ')
		.split(' ')
		.filter((_) => _)
		.map((c) => c.length)
		.filter((l) => l < 4).length === 0;
