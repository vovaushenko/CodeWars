// https://www.codewars.com/kata/526c7363236867513f0005ca

const isLeapYear = (year) => {
  if (year % 4 === 0 && !(year % 100 === 0)) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
