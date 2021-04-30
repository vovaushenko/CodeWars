// https://www.codewars.com/kata/567d71b93f8a50f461000019

const crossover = (c1, c2, index) => {
	return [
		c1.slice(0, index) + c2.slice(index),
		c2.slice(0, index) + c1.slice(index),
	];
};
