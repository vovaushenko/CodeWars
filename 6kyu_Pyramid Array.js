// https://www.codewars.com/kata/515f51d438015969f7000013/solutions/javascript

function pyramid(n) {
  //we will use recursion
  let pyro = [];
  let counter = 0;

  function pyroMaker(input) {
    if (pyro.length === n) {
      return;
    }
    counter++;
    let smallArr = [];
    for (let i = 0; i < counter; i++) {
      smallArr.push(1);
    }
    pyro.push(smallArr);

    pyroMaker(input - 1);
  }
  pyroMaker(n);
  return pyro;
}
