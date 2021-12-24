// 1357. Apply Discount Every n Orders
class Cashier {
	constructor(n, discount, products, prices) {
		this.n = n;
		this.discount = discount;
		this.prices = {};
		this.customer = 0;
		for (let i in products) {
			this.prices[products[i]] = prices[i];
		}
	}
	getBill(product, amount) {
		this.customer++;
		let total = 0;
		for (let i in product) {
			total += amount[i] * this.prices[product[i]];
		}
		if (this.customer % this.n === 0) {
			return total - (this.discount * total) / 100;
		}
		return total;
	}
}
