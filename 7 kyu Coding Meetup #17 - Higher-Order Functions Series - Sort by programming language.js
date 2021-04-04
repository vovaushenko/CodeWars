// https://www.codewars.com/kata/583ea278c68d96a5fd000abd

const sortByLanguage = (list) =>
  list.sort((dev1, dev2) =>
    dev1.language === dev2.language
      ? dev1.firstName.localeCompare(dev2.firstName)
      : dev1.language.localeCompare(dev2.language)
  );
