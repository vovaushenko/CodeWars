// 455. Assign Cookies

/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
*/

const findContentChildren = (g: number[], s: number[]): number => {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let contentKids = 0;
	let [i, j] = [0, 0];

	while (i < g.length && j < s.length) {
		if (g[i] <= s[j]) {
			contentKids += 1;
			i++;
			j++;
		} else {
			j++;
		}
	}

	return contentKids;
};

console.log(findContentChildren([1, 2, 3], [1, 4]));
