// https://www.codewars.com/kata/5701800886306a876a001031

const lineupStudents = (students) =>
	students
		.trim()
		.split(' ')
		.sort((s1, s2) =>
			s1.length !== s2.length ? s2.length - s1.length : s1.localeCompare(s2)
		);
