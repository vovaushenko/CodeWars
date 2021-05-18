// https://www.codewars.com/kata/56a75b91688b49ad94000015

const abundantNumber = (n) => {
	let divisorsSum = 0;
	for (let i = 0; i < n; i++) {
		if (n % i === 0) divisorsSum += i;
	}

	return divisorsSum > n;
};
