// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055

const findArray = (a1, ids) =>
	ids.reduce((res, id) => (a1[id] || a1[id] === 0) && res.concat(a1[id]), []) ||
	[];
