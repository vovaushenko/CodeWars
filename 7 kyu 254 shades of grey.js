const shadesOfGrey = (n, shades = [], id = 1) =>
	n <= 0
		? []
		: id === Math.min(n, 254) + 1
		? shades
		: shadesOfGrey(
				n,
				[...shades, '#' + ('0' + id.toString(16)).slice(-2).repeat(3)],
				id + 1
		  );
