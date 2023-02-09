// 355. Design Twitter
/*
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

Twitter() Initializes your twitter object.
void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
*/
class Twitter {
	constructor() {
		this.posts = [];
		this.following = {};
	}
	/**
	 * @param {number} userId
	 * @param {number} tweetId
	 * @return {void}
	 */
	postTweet(userId, tweetId) {
		this.posts.push({ userId, tweetId });
	}
	/**
	 * @param {number} userId
	 * @return {number[]}
	 */
	getNewsFeed(userId) {
		const tweets = [];
		const followees = this.following[userId] || [];
		for (let i = this.posts.length - 1; i >= 0 && tweets.length < 10; i--) {
			const post = this.posts[i];
			if (post.userId === userId || followees.includes(post.userId)) {
				tweets.push(post.tweetId);
			}
		}
		return tweets;
	}
	/**
	 * @param {number} followerId
	 * @param {number} followeeId
	 * @return {void}
	 */
	follow(followerId, followeeId) {
		if (followerId === followeeId) return;
		if (!this.following[followerId]) {
			this.following[followerId] = [];
		}
		this.following[followerId].push(followeeId);
	}
	/**
	 * @param {number} followerId
	 * @param {number} followeeId
	 * @return {void}
	 */
	unfollow(followerId, followeeId) {
		if (followerId === followeeId) return;
		if (!this.following[followerId]) {
			this.following[followerId] = [];
			return;
		}
		this.following[followerId] = this.following[followerId].filter(
			(id) => id !== followeeId
		);
	}
}
