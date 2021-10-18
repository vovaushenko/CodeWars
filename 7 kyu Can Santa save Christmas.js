const determineTime = (durations) =>
	durations.reduce((acc, dur) => {
		const [hrs, mins, secs] = dur.split(':');
		acc += parseInt(hrs) + parseInt(mins) / 60 + parseInt(secs) / 360;
		return acc;
	}, 0) <= 24;
