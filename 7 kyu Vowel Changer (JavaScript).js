// https://www.codewars.com/kata/597754ba62f8a19c98000030/train/javascript

const vowelChange = (str, vow, res = '') =>
	str.length === 0
		? res
		: vowelChange(
				str.substring(1),
				vow,
				(res += 'aeiou'.includes(str[0]) ? vow : str[0])
		  );
