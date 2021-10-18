const switchDict = (dict) =>
	Object.entries(dict).reduce(
		(swp, [key, val]) => (
			swp[val] ? (swp[val] = [...swp[val], key]) : (swp[val] = [key]), swp
		),
		{}
	);
