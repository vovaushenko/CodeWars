// https://www.codewars.com/kata/565f448e6e0190b0a40000cc

const actuallyReallyGood = (foods) => {
	foods = [...new Set(foods)];
	if (!foods.length) return "You know what's actually really good? Nothing!";
	if (foods.length === 1)
		return `You know what's actually really good? ${capitalize(
			foods[0]
		)} and more ${foods[0].toLowerCase()}.`;

	return `You know what's actually really good? ${capitalize(
		foods[0]
	)} and ${foods[1].toLowerCase()}.`;
};

const capitalize = (str) =>
	str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
