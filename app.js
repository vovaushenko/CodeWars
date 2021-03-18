// https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames

var list1 = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

const addUsername = (list) => {
  for (let developer of list) {
    const { firstName, lastName, age } = developer;

    const username = `${(firstName + lastName[0]).toLowerCase()}${new Date().getFullYear() - age}`;
    developer['username'] = username;
  }

  return list;
};

addUsername(list1);
