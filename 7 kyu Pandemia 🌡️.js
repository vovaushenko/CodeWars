const infected = (s) => {
	const { healthy, infected } = s
		.split('X')
		.reduce(
			(stat, continent) => (
				continent.includes('1')
					? (stat.infected += continent.length)
					: (stat.healthy += continent.length),
				stat
			),
			{ healthy: 0, infected: 0 }
		);

	if (!healthy && !infected) return 0;

	return 100 - 100 * (healthy / (healthy + infected));
};
