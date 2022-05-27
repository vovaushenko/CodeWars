//495. Teemo Attacking

const findPoisonedDuration = (timeSeries, duration) => {
	let totalPoisoned = 0;

	for (let i = 0; i < timeSeries.length; i++) {
		if (i === 0) {
			totalPoisoned += duration;
		} else {
			const diff = timeSeries[i] - timeSeries[i - 1];

			totalPoisoned += diff >= duration ? duration : diff;
		}
	}

	return totalPoisoned;
};
