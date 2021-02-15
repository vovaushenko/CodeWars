// https://www.codewars.com/kata/55d2603d506a40e162000056

const calculateTotal = (t1, t2) => t1.reduce((a, b) => a + b, 0) > t2.reduce((a, b) => a + b, 0);
