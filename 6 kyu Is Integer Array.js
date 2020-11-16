// https://www.codewars.com/kata/52a112d9488f506ae7000b95

const isIntArray = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return true;
    }

    let ints = arr.filter((num) => num % 1 === 0);
    if (ints.includes(null) || ints.includes("-1")) {
      return false;
    }

    return ints.length === arr.length ? true : false;
  }
  return false;
};
