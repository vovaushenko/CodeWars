// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9

const countWins = (winnerList, country) =>
	winnerList.reduce(
		(victories, currSeason) => (
			currSeason.country === country && victories++, victories
		),
		0
	);
