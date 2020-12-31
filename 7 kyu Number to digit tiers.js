// https://www.codewars.com/kata/586bca7fa44cfc833e00005c

const createArrayOfTiers = (num) =>
    Array.from({ length: (num + '').length }, (_, id) => (num + '').slice(0, id + 1));
