// 1217. Minimum Cost to Move Chips to The Same Position
/*
We have n chips, where the position of the ith chip is position[i].

We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.
*/

const minCostToMoveChips = (chips) => {
	const odd = chips.filter((n) => n % 2).length;
	return Math.min(odd, chips.length - odd);
};
