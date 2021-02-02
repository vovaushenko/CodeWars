// https://www.codewars.com/kata/5220b7f77e831a7e79000417

const generateRules = (func, porlist) => porlist.map((port) => func(port)).join('');
