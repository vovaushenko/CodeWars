const itsFriend = (friend) => typeof friend === 'object';

const queue = (queuers, pos) => {
	const properQ = queuers.map((prsn, id) =>
		id === pos ? { we: true, left: prsn } : prsn
	);
	let count = 0;
	while (properQ.length) {
		let randomDude = properQ.shift();
		if (itsFriend(randomDude)) {
			count++;
			randomDude.left--;
			if (!randomDude.left) break;
			properQ.push(randomDude);
		} else {
			randomDude--;
			count++;
			if (randomDude) properQ.push(randomDude);
		}
	}
	return count;
};
