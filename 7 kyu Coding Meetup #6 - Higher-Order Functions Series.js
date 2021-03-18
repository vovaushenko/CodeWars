// https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language

const isSameLanguage = (list) => list.every((dev) => dev.language === list[0].language);
