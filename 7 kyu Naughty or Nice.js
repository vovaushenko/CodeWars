//https:www.codewars.com/kata/52a6b34e43c2484ac10000cd

const getNiceNames = (people) =>
  people.filter((a) => a.wasNice === true).map((a) => a.name);

const getNaughtyNames = (people) =>
  people.filter((a) => a.wasNice === false).map((a) => a.name);