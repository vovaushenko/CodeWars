const waterbombs = (fire, w) =>
	fire.includes('x')
		? fire
				.split('Y')
				.filter((c) => c)
				.reduce(
					(waterBombs, section) =>
						section.length <= w
							? waterBombs + 1
							: waterBombs + Math.ceil(section.length / w),
					0
				)
		: 0;
