// https://www.codewars.com/kata/52fb87703c1351ebd200081f

const whatCentury = (num) => {
  let century = Math.ceil(num / 100);
  if (century <= 20) return century+'th'
  if (century == 21) return century+'st'
  if (century == 22) return century+'nd'
  if (century == 23) return century+'rd'
};
