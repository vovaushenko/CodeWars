// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c

const SubstringTest = (s1, s2) => {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	for (let i = 0; i < s1.length; i++) {
		let tempStr = '';
		for (let j = i; j < s1.length; j++) {
			tempStr += s1[j];
			if (tempStr.length > 1 && s2.includes(tempStr)) return true;
		}
	}

	return false;
};

SubstringTest('fooz', 'bar');
