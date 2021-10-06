const sharePrice = (inv, ch) => {
	for (let c of ch) {
		c > 0 ? (inv += (inv * c) / 100) : (inv -= (inv * Math.abs(c)) / 100);
	}
	return inv.toFixed(2);
};
