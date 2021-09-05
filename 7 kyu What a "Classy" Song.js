// https://www.codewars.com/kata/6089c7992df556001253ba7d/solutions/javascript/me/best_practice

class Song {
	constructor(title, artist) {
		this.title = title;
		this.artist = artist;
		this.listenersCache = new Map();
	}

	howMany(dailyListeners) {
		let count = 0;
		for (let listener of dailyListeners) {
			if (!this.listenersCache.has(listener.toLowerCase())) {
				count++;
				this.listenersCache.set(listener.toLowerCase(), true);
			}
		}

		return count;
	}
}
