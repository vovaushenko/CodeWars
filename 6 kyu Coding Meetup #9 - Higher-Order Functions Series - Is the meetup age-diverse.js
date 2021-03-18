// https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

const isAgeDiverse = (list) => {
  let ageMap = {
    teens: false,
    twenties: false,
    thirties: false,
    forties: false,
    fifties: false,
    sixties: false,
    seventies: false,
    eighties: false,
    nineties: false,
    centenarian: false,
  };

  const ageGroup = list.map((dev) => dev.age);

  for (let age of ageGroup) {
    if (age > 9 && age < 20) ageMap['teens'] = true;
    if (age > 19 && age < 30) ageMap['twenties'] = true;
    if (age > 29 && age < 40) ageMap['thirties'] = true;
    if (age > 39 && age < 50) ageMap['forties'] = true;
    if (age > 49 && age < 60) ageMap['fifties'] = true;
    if (age > 59 && age < 70) ageMap['sixties'] = true;
    if (age > 69 && age < 80) ageMap['seventies'] = true;
    if (age > 79 && age < 90) ageMap['eighties'] = true;
    if (age > 89 && age < 100) ageMap['nineties'] = true;
    if (age > 100) ageMap['centenarian'] = true;
  }

  for (let key in ageMap) {
    if (!ageMap[key]) return false;
  }

  return true;
};
