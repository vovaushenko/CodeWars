// https://www.codewars.com/kata/5981a139f5471fd1b2000071

const task = (w, n, c) =>
    `It is ${w} today, ${
        w === 'Wednesday'
            ? 'Robert'
            : w === 'Monday'
            ? 'James'
            : w === 'Friday'
            ? 'William'
            : w === 'Tuesday'
            ? 'John'
            : 'Michael'
    }, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;