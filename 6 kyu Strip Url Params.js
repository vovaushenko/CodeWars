// https://www.codewars.com/kata/51646de80fd67f442c000013

const stripUrlParams = (url, paramsToStrip = []) => {
	if (!url.includes('?')) return url;

	const [address, params] = url.split('?');
	const paramsArray = params.split('&');
	let filteredParams = [];
	let seen = {};

	for (let param of paramsArray) {
		if (!seen[param[0]] && !paramsToStrip.includes(param[0])) {
			filteredParams.push(param);
		}
		seen[param[0]] = true;
	}
	if (!filteredParams.length) return address;
	filteredParams = filteredParams.join('&');

	return `${address}?${filteredParams}`;
};

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']));
