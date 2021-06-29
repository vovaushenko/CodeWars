Array.prototype.toDictionary = function (keyFn, valueFn) {
	let dictionary = {};
	for (let v of this)
		valueFn ? (dictionary[keyFn(v)] = valueFn(v)) : (dictionary[keyFn(v)] = v);
	return dictionary;
};
