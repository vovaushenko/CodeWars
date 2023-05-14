/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = (details) =>
	details.map((p) => p.slice(11, 13)).filter((p) => p > 60).length;
