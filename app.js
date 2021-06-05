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

let list = new List([-18, -31, 81, -19, 111, -888]);

console.log(list.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4]));

// integersList = [-18, -31, 81, -19, 111, -888]
// digitsList = [1, 8, 4]
// l.count_spec_digits(integersList, digitsList) == [(1, 7), (8, 5), (4, 0)]
