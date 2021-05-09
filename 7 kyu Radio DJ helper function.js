// https://www.codewars.com/kata/561bbcb0fbbfb0f5010000ee

const convertToSeconds = (time) =>
	time
		.split(':')
		.reduce((sec, t, id) => (id === 0 ? sec + parseInt(t) * 60 : sec + +t), 0);

const longestPossible = (playback) => {
	let currentlyLongest;
	let proximity = +Infinity;

	for (let song of songs) {
		let durationDifference = playback - convertToSeconds(song.playback);

		if (!durationDifference) return song.title;

		if (durationDifference > 0) {
			if (durationDifference < proximity) {
				currentlyLongest = song.title;
			}
			proximity = Math.min(durationDifference, proximity);
		}
	}

	return currentlyLongest ? currentlyLongest : false;
};
