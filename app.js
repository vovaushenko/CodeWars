const recurrence = (b, f, t, s = 1) =>
	s === t ? b : recurrence(f(b), f, t, ++s);

console.log(recurrence(1, (n) => n + 3, 4));
