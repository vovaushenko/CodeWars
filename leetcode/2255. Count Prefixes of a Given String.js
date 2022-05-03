//2255. Count Prefixes of a Given String
const isPrefixOf = (possiblePrefix, word) => word.startsWith(possiblePrefix);

const countPrefixes = (prefixes, s) =>
	prefixes.filter((prefix) => isPrefixOf(prefix, s)).length;
