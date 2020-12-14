// https://www.codewars.com/kata/5966eeb31b229e44eb00007a

const vaporcode = (str) => [...str.replace(/ /g, '')].map((a) => a.toUpperCase()).join('  ');

console.log(vaporcode('Lets go to the movies!!!'));
