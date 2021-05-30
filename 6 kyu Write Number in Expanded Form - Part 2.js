// https://www.codewars.com/kata/58cda88814e65627c5000045

const expandedForm = (num) => {
	let [round, reminder] = String(num).split('.');

	let expanded = [];
	let length = round.length - 1;
	for (let num of round) {
		+num && expanded.push(num * 10 ** length);
		length--;
	}

	for (let i = 0; i < round.length; i++) {}

	for (let i = 0; i < reminder.length; i++) {
		if (+reminder[i]) expanded.push(`${reminder[i]}/${10 ** (i + 1)}`);
	}

	console.log(expanded);
	return expanded.join(' + ');
};
