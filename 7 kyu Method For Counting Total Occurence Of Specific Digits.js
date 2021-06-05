function List() {
	this.countSpecDigits = function (integersList, digitsList) {
		let res = [];

		for (let digit of digitsList) {
			let count = 0;
			for (let integer of integersList) {
				integer = [...(integer + '')];

				count += [...integer].filter((d) => +d === digit).length;
			}
			res.push([digit, count]);
		}
		return res;
	};
}
