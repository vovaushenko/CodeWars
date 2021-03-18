// https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames

const addUsername = (list) => {
  for (let developer of list) {
    const { firstName, lastName, age } = developer;

    const username = `${(firstName + lastName[0]).toLowerCase()}${new Date().getFullYear() - age}`;
    developer['username'] = username;
  }

  return list;
};
