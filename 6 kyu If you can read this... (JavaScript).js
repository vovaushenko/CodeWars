// https://www.codewars.com/kata/586538146b56991861000293

const to_nato = (words) =>
	[...words]
		.map((char) => (/[a-zA-Z]/.test(char) ? NATO[char.toLowerCase()] : char))
		.filter((c) => c !== ' ')
		.join(' ');
