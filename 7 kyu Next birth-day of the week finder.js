const nextBirthdayOfTheWeek = (birthday) => {
	let [day, birthDay, month, year] = [
		birthday.getDate(),
		birthday.getDay(),
		birthday.getMonth(),
		birthday.getFullYear() + 1,
	];
	let yearsPassed = 1;
	while (birthDay !== new Date(year, month, day).getDay()) {
		yearsPassed++;
		year++;
	}

	return yearsPassed;
};
