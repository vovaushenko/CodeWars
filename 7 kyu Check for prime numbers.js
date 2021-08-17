const isPrime = (n, divisor = 2) =>
	n < 2
		? false
		: divisor === n
		? true
		: n % divisor === 0
		? false
		: isPrime(n, divisor + 1);
