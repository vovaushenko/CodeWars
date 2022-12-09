// 2491. Divide Players Into Teams of Equal Skill
/*
You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.
*/

const dividePlayers = (skill) => {
	const sortedSkill = [...skill].sort((a, b) => a - b);
	let totalSkill = null;
	let totalChemistry = 0;
	let [i, j] = [0, sortedSkill.length - 1];
	while (i < j) {
		const [sk1, sk2] = [sortedSkill[i], sortedSkill[j]];
		if (totalSkill === null) {
			totalSkill = sk1 + sk2;
			totalChemistry += sk1 * sk2;
		} else {
			if (sk1 + sk2 !== totalSkill) return -1;
			totalChemistry += sk1 * sk2;
		}
		i++;
		j--;
	}

	return totalChemistry;
};
