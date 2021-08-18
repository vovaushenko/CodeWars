const checkConcatenatedSum = (
	num,
	n,
	sum = [...String(Math.abs(num))].reduce((r, d) => r + +d.repeat(n), 0)
) => (num < 0 ? -sum === num : sum === num);
