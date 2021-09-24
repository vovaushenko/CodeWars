const sexyName = (
	name,
	score = [...name.replace(/\s/g, '')].reduce(
		(sc, ch) => sc + SCORES[ch.toUpperCase()],
		0
	)
) =>
	score <= 60
		? 'NOT TOO SEXY'
		: score >= 600
		? 'THE ULTIMATE SEXIEST'
		: score <= 300 && score > 60
		? 'PRETTY SEXY'
		: 'VERY SEXY';
