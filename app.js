// https://www.codewars.com/kata/561bbcb0fbbfb0f5010000ee

const songs = [
	{ artist: 'Marillion', title: 'Keyleigh', playback: '03:36' },
	{ artist: 'Pink Floyd', title: 'Time', playback: '06:48' },
	{ artist: 'Rush', title: 'YYZ', playback: '04:27' },
	{ artist: 'Bonobo', title: 'Days To Come', playback: '03:50' },
	{ artist: 'Coldplay', title: 'Yellow', playback: '04:32' },
	{ artist: 'Bloc Party', title: 'Like Eating Glass', playback: '04:22' },
	{ artist: 'The Killers', title: 'For Reasons Unknown', playback: '03:30' },
	{ artist: 'Arctic Monkeys', title: 'Teddy Picker', playback: '03:25' },
	{
		artist: 'Joe Satriani',
		title: 'Surfing With The Alien',
		playback: '04:34',
	},
];

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

console.log(longestPossible(215));
