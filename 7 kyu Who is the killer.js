// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

const killer = (suspectInfo, dead) =>
  Object.entries(suspectInfo).find(([_, saw]) => dead.every((person) => saw.includes(person)))[0];
