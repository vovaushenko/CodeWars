// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef

const getSectionIdFromScroll = (scrollY, sizes) => {
	if (scrollY < sizes[0]) return 0;
	let currentScroll = 0;
	let count = 0;
	for (let size of sizes) {
		currentScroll += size;
		count++;
		if (currentScroll >= scrollY) break;
	}

	if (count === sizes.length && scrollY >= currentScroll) return -1;

	return currentScroll - 1 >= scrollY ? count - 1 : count;
};
