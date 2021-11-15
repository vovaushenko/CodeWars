const getParticipants = (handShakes) => {
	let ppl = 1;
	let count = 0;

	while (count < handShakes) {
		count += ppl++;
	}
	return ppl;
};
