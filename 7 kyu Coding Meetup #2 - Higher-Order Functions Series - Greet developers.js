// https://www.codewars.com/kata/5b5b12e705f04b3a740000d0

const greetDevelopers = (list) =>
  list.map((dev) => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));
