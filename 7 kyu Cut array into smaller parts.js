// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150

function makeParts(arr, chunkSize) {
	let counter = 0;
	let temparr = [];
	let chuks = [];

	for (let num of arr) {
		counter++;
		temparr.push(num);
		if (counter === chunkSize) {
			chuks.push(temparr);
			temparr = [];
			counter = 0;
		}
	}
	if (counter < chunkSize && temparr.length) chuks.push(temparr);
	return chuks;
}
