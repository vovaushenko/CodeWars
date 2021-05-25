// https://www.codewars.com/kata/58545549b45c01ccab00058c
const calculate_total = (subtotal, tax, tip) =>
	+(subtotal + (subtotal * (tax + tip)) / 100).toFixed(2);
