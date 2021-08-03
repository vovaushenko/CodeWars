// https://www.codewars.com/kata/580a41b6d6df740d6100030c

const mentionedStops = {
	Rejection: true,
	Disappointment: true,
	BackstabbingCentral: true,
	ShatteredDreamsParkway: true,
};

const alan = (x) =>
	[
		...new Set(
			x.filter((station) => station.split(' ').join('') in mentionedStops)
		),
	].length === Object.keys(mentionedStops).length
		? 'Smell my cheese you mother!'
		: 'No, seriously, run. You will miss it.';
