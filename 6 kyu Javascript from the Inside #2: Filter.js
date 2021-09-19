Array.prototype.filter = function (f, receiver) {
	let len = this.length;
	let acc = [];
	for (let i = 0; i < len; i++) {
		if (i in this && f.call(receiver, this[i], i, this)) {
			acc.push(this[i]);
		}
	}
	return acc;
};
