// https://www.codewars.com/kata/5c563cb78dac1951c2d60f01

const passTheDoorMan = (w) =>
	([...w].find((c, id) => c === [...w][id + 1]).charCodeAt(0) - 96) * 3;
