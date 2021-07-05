// https://www.codewars.com/kata/555a77eb65dd419534000016

const sometimes =
	(fn, callCounter = 0) =>
	(...params) => {
		callCounter++;
		if (callCounter < 4) return fn(...params);
		return callCounter % 2 === 0 ? "hmm, I don't know!" : fn(...params);
	};
