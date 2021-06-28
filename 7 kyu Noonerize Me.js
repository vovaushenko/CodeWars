// https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript

const noonerize = ([n1, n2]) => {
	if (typeof n1 !== 'number' || typeof n2 !== 'number') return 'invalid array';
	return Math.abs(
		+(String(n2).slice(0, 1) + String(n1).slice(1)) -
			+(String(n1).slice(0, 1) + String(n2).slice(1))
	);
};
