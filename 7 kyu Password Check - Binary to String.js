// https://www.codewars.com/kata/5a731b36e19d14400f000c19

const decodePass = (passArr, bin) =>
	passArr.find(
		(pass) =>
			pass ===
			bin
				.split(' ')
				.map((b) => String.fromCharCode(parseInt(b, 2)))
				.join('')
	) || false;
