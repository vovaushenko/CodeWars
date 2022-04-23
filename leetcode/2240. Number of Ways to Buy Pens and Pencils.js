//2240. Number of Ways to Buy Pens and Pencils
/*
You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.

Return the number of distinct ways you can buy some number of pens and pencils.
*/
const waysToBuyPensPencils = (total, costPen, costPencil) => {
	let countPen = 0;
	let waysToBuy = 0;

	while (true) {
		const left = total - countPen * costPen;
		if (left < 0) break;
		waysToBuy += Math.floor(left / costPencil) + 1;
		countPen++;
	}

	return waysToBuy;
};
