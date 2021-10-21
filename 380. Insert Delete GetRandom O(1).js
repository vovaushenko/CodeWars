// https://leetcode.com/problems/insert-delete-getrandom-o1/

class RandomizedSet {
	constructor() {
		this.set = {};
		this.count = 0;
	}

	insert(val) {
		if (val in this.set) {
			return false;
		} else {
			this.set[val] = true;
			this.count++;
			return true;
		}
	}

	remove(val) {
		if (val in this.set) {
			delete this.set[val];
			this.count--;
			if (this.count < 0) this.count = 0;
			return true;
		} else {
			return false;
		}
	}

	getRandom() {
		const randomID = ~~(Math.random() * this.count);
		const keys = Object.keys(this.set);
		return +keys[randomID];
	}
}
