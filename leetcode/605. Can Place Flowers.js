// 605. Can Place Flowers
/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
*/

const canPlaceFlowers = (flowerbed, n) => {
	for (let i = 0; i < flowerbed.length && n; i++) {
		if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
			n--;
			i++;
		}
	}

	return n === 0;
};
