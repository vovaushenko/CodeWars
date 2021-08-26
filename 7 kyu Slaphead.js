const bald = (x) => {
	const hair = x.replace(/-/g, '').length;
	let verdict = 'Hobo!';

	if (!hair) verdict = 'Clean!';
	if (hair === 1) verdict = 'Unicorn!';
	if (hair === 2) verdict = 'Homer!';
	if ([3, 4, 5].includes(hair)) verdict = 'Careless!';
	return ['-'.repeat(x.length), verdict];
};
