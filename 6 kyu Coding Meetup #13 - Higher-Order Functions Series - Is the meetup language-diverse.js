// https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse

const isLanguageDiverse = (list) => {
  const hash = list.map((dev) => dev.language).reduce((h, l) => ((h[l] = h[l] + 1 || 1), h), {});

  const lessPopular = Math.min(...Object.values(hash));
  const mostPopular = Math.max(...Object.values(hash));

  return mostPopular / lessPopular <= 2;
};
