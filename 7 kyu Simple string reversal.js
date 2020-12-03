// https://www.codewars.com/kata/5a71939d373c2e634200008e

const solve = (str) => {
  let spaces = [...str].reduce((a, e, i) => {
    if (e === ' ') {
      a.push(i);
    }
    return a;
  }, []);
  console.log(spaces);
  let simpleReverse = [...str.replace(/ /g, '')].reverse();
  console.log(simpleReverse);
  for (let i = 0; i < spaces.length; i++) {
    simpleReverse.splice(spaces[i], 0, ' ');
  }

  return simpleReverse.join('');
};