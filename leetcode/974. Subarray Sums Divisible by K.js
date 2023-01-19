const subarraysDivByK = (nums, k) => {
	const prevsums = Array(k).fill(0);
	const mod = (n, m) => ((n % m) + m) % m;
	let ans = 0,
		prev = 0;
	for (const num of nums) {
		prev = mod(prev + num, k);
		if (prev == 0) ans++;
		ans += prevsums[prev];
		prevsums[prev]++;
	}
	return ans;
};
