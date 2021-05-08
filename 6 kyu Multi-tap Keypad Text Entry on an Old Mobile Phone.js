const keyboard = ['1','ABC2','DEF3','GHI4','JKL5','MNO6','PQRS7','TUV8','WXYZ9','*',' 0','#'];

const presses = (phrase) =>
	[...phrase.toUpperCase()].reduce((buttonsPressed, char) => {
		const row = keyboard.find((btn) => btn.includes(char));

		buttonsPressed += row ? row.indexOf(char) + 1 : 0;
		return buttonsPressed;
	}, 0);