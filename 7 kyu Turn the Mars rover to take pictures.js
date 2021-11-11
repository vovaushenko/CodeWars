// https://www.codewars.com/kata/588e68aed4cff457d300002e/train/javascript

const turn = (c, t) =>
	['SE', 'EN', 'NW', 'WS'].includes(c + t) ? 'left' : 'right';
