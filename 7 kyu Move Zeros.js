// https://www.codewars.com/kata/55c098aa8468f3b9030000f1

const move_zeros = (arrNum, isRight = true) =>
  isRight
    ? [...arrNum.filter((num) => num), ...arrNum.filter((num) => !num)]
    : [...arrNum.filter((num) => !num), ...arrNum.filter((num) => num)];
