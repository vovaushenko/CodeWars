// https://www.codewars.com/kata/552564a82142d701f5001228

const discoverOriginalPrice = (discountedPrice, salePercentage) =>
	((100 * discountedPrice) / (100 - salePercentage)).toFixed(2) * 1;
