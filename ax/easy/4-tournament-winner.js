// https://www.algoexpert.io/questions/Tournament%20Winner
const firstTeamWon = (flag) => flag === 1;

const tournamentWinner = (competitions, results) => {
	const score = new Object(null);
	let round = 0;

	for (const [team1, team2] of competitions) {
		if (firstTeamWon(results[round])) {
			score[team1] ? (score[team1] += 3) : (score[team1] = 3);
		} else {
			score[team2] ? (score[team2] += 3) : (score[team2] = 3);
		}
		round++;
	}
	const winningScore = Math.max(...Object.values(score));

	for (const team in score) {
		if (score[team] === winningScore) return team;
	}
};
