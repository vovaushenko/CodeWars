// https://www.codewars.com/kata/56644a421b7c94c622000056

const mostLikely = (p1, p2) =>
	eval(p1.slit(':').join('/')) > eval(p2.slit(':').join('/'));
