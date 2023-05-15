/**
 * @param {number[]} derived
 * @return {boolean}
 */
const doesValidArrayExist = (derived) =>
	derived.filter((n) => n).length % 2 === 0;
