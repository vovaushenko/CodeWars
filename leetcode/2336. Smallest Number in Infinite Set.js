//2336. Smallest Number in Infinite Set
class SmallestInfiniteSet {
	constructor() {
		this.set = Array.from({ length: 1000 }, (_, i) => i + 1);
	}

	popSmallest() {
		for (let i = 0; i < this.set.length; i++) {
			if (this.set[i]) {
				const smallest = this.set[i];
				this.set[i] = null;
				return smallest;
			}
		}
	}

	addBack(num) {
		this.set[num] = num;
	}
}
