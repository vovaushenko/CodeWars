const highestValue = (a, b) => (stringWeigth(b) > stringWeigth(a) ? b : a);

const stringWeigth = (str) =>
	[...str].reduce((acc, c) => acc + c.charCodeAt(0), 0);
