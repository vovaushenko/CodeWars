// https://www.codewars.com/kata/56536e45bd4717003a000056

Number.prototype.toBits = function (length = 8) {
	let diff = length - this.toString(2).length;
	if (diff <= 0) return this.toString(2);
	return '0'.repeat(diff) + this.toString(2);
};
