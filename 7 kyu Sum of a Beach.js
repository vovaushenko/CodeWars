// https://www.codewars.com/kata/5b37a50642b27ebf2e000010

const sumOfABeach = (beach) =>
  !beach.toLowerCase().match(/sand|water|sun|fish/g)
    ? 0
    : beach.toLowerCase().match(/sand|water|sun|fish/g).length;
