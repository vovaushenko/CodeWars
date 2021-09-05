const fizzBuzzCustom = (
	stringOne = 'Fizz',
	stringTwo = 'Buzz',
	numOne = 3,
	numTwo = 5
) =>
	Array.from({ length: 100 }, (_, id) =>
		(id + 1) % (numOne * numTwo) === 0
			? `${stringOne}${stringTwo}`
			: (id + 1) % numOne === 0
			? stringOne
			: (id + 1) % numTwo === 0
			? stringTwo
			: id + 1
	);
