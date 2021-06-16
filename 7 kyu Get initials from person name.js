// https://www.codewars.com/kata/57b56af6b69bfcffb80000d7

const toInitials = (name) =>
	name
		.split(' ')
		.map((n) => n[0].toUpperCase() + '.')
		.join('');
