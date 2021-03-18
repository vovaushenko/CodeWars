// https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins

// 3
const findAdmin = (list, lang) =>
  list.filter((dev) => dev.language === lang && dev.githubAdmin === 'yes');
