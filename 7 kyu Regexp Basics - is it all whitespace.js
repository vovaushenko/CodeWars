// https://www.codewars.com/kata/567de8823fa5eee02100002a

String.prototype.whitespace = function () {
	if (!this) return true;
	return !this.match(/\S/g);
};
