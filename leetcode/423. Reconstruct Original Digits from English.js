const originalDigits = (s) => {
	let mp = new Map();
	for (let char of s) {
		if (mp.has(char)) mp.set(char, mp.get(char) + 1);
		else mp.set(char, 1);
	}
	let zero = '',
		one = '',
		two = '',
		three = '',
		four = '',
		five = '',
		six = '',
		seven = '',
		eight = '',
		nine = '';
	while (mp.has('z') && mp.get('z') > 0) {
		mp.set('z', mp.get('z') - 1);
		mp.set('e', mp.get('e') - 1);
		mp.set('r', mp.get('r') - 1);
		mp.set('o', mp.get('o') - 1);
		zero += '0';
	}
	while (mp.has('w') && mp.get('w') > 0) {
		mp.set('t', mp.get('t') - 1);
		mp.set('w', mp.get('w') - 1);
		mp.set('o', mp.get('o') - 1);
		two += '2';
	}
	while (mp.has('x') && mp.get('x') > 0) {
		mp.set('s', mp.get('s') - 1);
		mp.set('i', mp.get('i') - 1);
		mp.set('x', mp.get('x') - 1);
		six += '6';
	}
	while (mp.has('g') && mp.get('g') > 0) {
		mp.set('e', mp.get('e') - 1);
		mp.set('i', mp.get('i') - 1);
		mp.set('g', mp.get('g') - 1);
		mp.set('h', mp.get('h') - 1);
		mp.set('t', mp.get('t') - 1);
		eight += '8';
	}
	while (mp.has('h') && mp.get('h') > 0) {
		mp.set('t', mp.get('t') - 1);
		mp.set('h', mp.get('h') - 1);
		mp.set('r', mp.get('r') - 1);
		mp.set('e', mp.get('e') - 1);
		mp.set('e', mp.get('e') - 1);
		three += '3';
	}
	while (mp.has('s') && mp.get('s') > 0) {
		mp.set('s', mp.get('s') - 1);
		mp.set('e', mp.get('e') - 1);
		mp.set('v', mp.get('v') - 1);
		mp.set('e', mp.get('e') - 1);
		mp.set('n', mp.get('n') - 1);
		seven += '7';
	}
	while (mp.has('v') && mp.get('v') > 0) {
		mp.set('f', mp.get('f') - 1);
		mp.set('i', mp.get('i') - 1);
		mp.set('v', mp.get('v') - 1);
		mp.set('e', mp.get('e') - 1);
		five += '5';
	}
	while (mp.has('f') && mp.get('f') > 0) {
		mp.set('f', mp.get('f') - 1);
		mp.set('o', mp.get('o') - 1);
		mp.set('u', mp.get('u') - 1);
		mp.set('r', mp.get('r') - 1);
		four += '4';
	}
	while (mp.has('i') && mp.get('i') > 0) {
		mp.set('n', mp.get('n') - 1);
		mp.set('i', mp.get('i') - 1);
		mp.set('n', mp.get('n') - 1);
		mp.set('e', mp.get('e') - 1);
		nine += '9';
	}
	while (mp.has('o') && mp.get('o') > 0) {
		mp.set('o', mp.get('o') - 1);
		mp.set('n', mp.get('n') - 1);
		mp.set('e', mp.get('e') - 1);
		one += '1';
	}
	return zero + one + two + three + four + five + six + seven + eight + nine;
};
