// https://www.codewars.com/kata/539de388a540db7fec000642

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
    enteredCode === correctCode && Date.parse(currentDate) >= Date.parse(expirationDate);
