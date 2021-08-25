// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

const evaporator = (_, evap_per_day, threshold, left = 100, day = 0) =>
	left < threshold
		? day
		: evaporator(
				_,
				evap_per_day,
				threshold,
				left - left * (evap_per_day / 100),
				day + 1
		  );
