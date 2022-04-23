//535. Encode and Decode TinyURL
/*

TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

Solution() Initializes the object of the system.
String encode(String longUrl) Returns a tiny URL for the given longUrl.
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

*/

const encode = (longUrl) =>
	`https://tinyurl.com/${Buffer.from(longUrl, 'binary').toString('base64')}`;

const decode = (shortUrl) => {
	const encoded = shortUrl.split('tinyurl.com/')[1];
	return Buffer.from(encoded, 'base64').toString();
};
