// https://www.codewars.com/kata/5590961e6620c0825000008f

const swap = (str) =>
  [...str]
    .map((a) =>
      a.toUpperCase() === a ? (a = a.toLowerCase()) : (a = a.toUpperCase())
    )
    .join('');
