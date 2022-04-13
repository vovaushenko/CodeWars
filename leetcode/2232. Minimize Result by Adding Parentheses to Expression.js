//2232. Minimize Result by Adding Parentheses to Expression
/*
You are given a 0-indexed string expression of the form "<num1>+<num2>" where <num1> and <num2> represent positive integers.

Add a pair of parentheses to expression such that after the addition of parentheses, expression is a valid mathematical expression and evaluates to the smallest possible value. The left parenthesis must be added to the left of '+' and the right parenthesis must be added to the right of '+'.

Return expression after adding a pair of parentheses such that expression evaluates to the smallest possible value. If there are multiple answers that yield the same result, return any of them.

The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.
*/

const minimizeResult = (expression) => {
	const [s1, s2] = expression.split('+');
	let minRes = Infinity;
	let pos = [0, 0];
	for (let i = 0; i < s1.length; i++) {
		for (let j = 0; j < s2.length; j++) {
			let u1 = !i ? 1 : Number(s1.slice(0, i));
			let u2 = Number(s1.slice(i));
			let v1 = Number(s2.slice(0, j + 1));
			let v2 = j === s2.length - 1 ? 1 : Number(s2.slice(j + 1));
			let currentValue = u1 * (u2 + v1) * v2;
			if (currentValue < minRes) {
				minRes = currentValue;
				pos = [i, j];
			}
		}
	}
	return `${s1.slice(0, pos[0])}(${s1.slice(pos[0])}+${s2.slice(
		0,
		pos[1] + 1
	)})${s2.slice(pos[1] + 1)}`;
};
