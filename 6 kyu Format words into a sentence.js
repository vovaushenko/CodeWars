// https://www.codewars.com/kata/51689e27fe9a00b126000004

const formatWords = (arr) => {
  let noSpaces = arr.filter((el) => /\S/.test(el));

  let formatted = noSpaces.reduce((sentence, word, id) => {
    return id !== noSpaces.length - 1
      ? sentence + ' ' + ',' + ' ' + word
      : sentence + ' ' + 'and' + ' ' + word;
  });
  return formatted;
};