const addLetters = (...letters) => {
	let total = 0;
	for (let letter of letters) total += letter.charCodeAt(0) - 96;

	const missing = String.fromCharCode((total % 26) + 96);
	return /\w/.test(missing) ? missing : 'z';
};
