// https://www.codewars.com/kata/57ee24e17b45eff6d6000164

const catMouse = (x) => ([...x].filter((c) => c === '.').length <= 3 ? 'Caught!' : 'Escaped!');
