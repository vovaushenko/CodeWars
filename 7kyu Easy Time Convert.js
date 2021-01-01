// https://www.codewars.com/kata/5a084a098ba9146690000969

const timeConvert = (num) =>
    num <= 0
        ? '00:00'
        : `${Math.floor(num / 60) < 10 ? '0' + Math.floor(num / 60) : Math.floor(num / 60)}:${
              Math.floor(num % 60) < 10 ? '0' + Math.floor(num % 60) : Math.floor(num % 60)
          }`;
