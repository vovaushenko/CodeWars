// https://www.codewars.com/kata/59656c69253c365e58000046

const maxPossibleScore = (questions, arr, newQuestions = arr.map(String)) =>
	Object.entries(questions).reduce(
		(maxScore, question) =>
			newQuestions.includes(question[0])
				? maxScore + question[1] * 2
				: maxScore + question[1],
		0
	);
