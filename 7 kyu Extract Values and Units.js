// https://www.codewars.com/kata/55c0ee3b9951adceaa00005f

const valAndUnits = (s) => ({
	val: +[...s].filter((n) => +n || '-.'.includes(n)).join(''),
	units: [...s].filter((c) => /[a-z\%]/i.test(c)).join(''),
});
