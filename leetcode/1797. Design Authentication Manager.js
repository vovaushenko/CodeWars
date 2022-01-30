//1797. Design Authentication Manager
/*
There is an authentication system that works with authentication tokens. For each session, the user will receive a new authentication token that will expire timeToLive seconds after the currentTime. If the token is renewed, the expiry time will be extended to expire timeToLive seconds after the (potentially different) currentTime.

Implement the AuthenticationManager class:

AuthenticationManager(int timeToLive) constructs the AuthenticationManager and sets the timeToLive.
generate(string tokenId, int currentTime) generates a new token with the given tokenId at the given currentTime in seconds.
renew(string tokenId, int currentTime) renews the unexpired token with the given tokenId at the given currentTime in seconds. If there are no unexpired tokens with the given tokenId, the request is ignored, and nothing happens.
countUnexpiredTokens(int currentTime) returns the number of unexpired tokens at the given currentTime.
Note that if a token expires at time t, and another action happens on time t (renew or countUnexpiredTokens), the expiration takes place before the other actions.


*/
class AuthenticationManager {
	constructor(timeToLive) {
		this.timeToLive = timeToLive;
		this.tokens = {};
	}

	generate(tokenId, currentTime) {
		const newToken = {
			expires: this.timeToLive + currentTime,
		};
		this.tokens[tokenId] = newToken;
	}
	renew(tokenId, currentTime) {
		const foundToken = this.tokens[tokenId];
		if (!foundToken || foundToken.expires < currentTime) return;
		foundToken.expires = currentTime + this.timeToLive;
	}

	countUnexpiredTokens(currentTime) {
		return Object.values(this.tokens).filter(
			(token) => token.expires >= currentTime
		).length;
	}
}
