// https://www.codewars.com/kata/56f29b3b75e340627a0009d5

const recurrence = (b, f, t, s = 1) =>
	s === t ? b : recurrence(f(b), f, t, ++s);
