// https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

// 3

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

var list1 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby',
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python',
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby',
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
  },
];

console.log(isAgeDiverse(list1));
