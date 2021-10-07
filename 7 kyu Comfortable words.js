const LEFT = 'qwertasdfgzxcvb';
const RIGHT = 'yuiophjklnm';

const comfortable_word = (word) => {
	const evenChars = [...word].filter((_, id) => id % 2 === 0);
	const oddChars = [...word].filter((_, id) => id % 2 !== 0);

	return (
		(evenChars.every((char) => LEFT.includes(char)) &&
			oddChars.every((char) => RIGHT.includes(char))) ||
		(evenChars.every((char) => RIGHT.includes(char)) &&
			oddChars.every((char) => LEFT.includes(char)))
	);
};
