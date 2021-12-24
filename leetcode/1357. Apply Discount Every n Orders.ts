// 1357. Apply Discount Every n Orders
class Cashier {
	constructor(
		private n: number,
		private discount: number,
		private products: number[],
		private prices: number[],
		private customersCount: number,
		private map: Map<number, number> = new Map()
	) {
		for (let i = 0; i < products.length; i++) {
			map.set(products[i], prices[i]);
		}
	}

	private _calculateDiscountedPrice = (bill: number): number =>
		bill - (bill * this.discount) / 100;

	private _calculateBill = (product: number[], amount: number[]) =>
		product.reduce(
			(total, prod, id) => total + this.map.get(prod)! * amount[id],
			0
		);

	public getBill(product: number[], amount: number[]): number {
		this.customersCount++;
		const bill = this._calculateBill(product, amount);
		if (this.customersCount % this.n === 0) {
			return this._calculateDiscountedPrice(bill);
		}
		return bill;
	}
}
