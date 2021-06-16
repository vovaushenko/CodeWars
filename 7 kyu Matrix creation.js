// https://www.codewars.com/kata/5a34da5dee1aae516d00004a

const getMatrix = (length) =>
	Array.from({ length }, (_, iteration) => generateRow(length, iteration));

const generateRow = (length, iteration) =>
	Array.from({ length }, (_, id) => (id === iteration ? 1 : 0));
