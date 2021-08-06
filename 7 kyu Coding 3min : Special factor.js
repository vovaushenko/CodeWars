// https://www.codewars.com/kata/570e5d0b93214b1a950015b1

const sc = (n) => {
	const init = n.toString(2);
	const res = [];

	for (let i = 1; i <= n; i++) {
		if (n % i === 0 && init.includes(i.toString(2))) res.push(i);
	}

	return res;
};
