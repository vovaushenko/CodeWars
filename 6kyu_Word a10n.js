// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  let solution = [];
  let arr = string.split("-");

  const abbMaker = (a) => {
    if (a.length === 0) {
      return;
    }
    let l = a[0].length - 2;

    let abb = `${a[0][0]}${l}${a[0][a[0].length - 1]}`;

    solution.push(abb);
    abbMaker(a.slice(1));
  };

  abbMaker(arr);
  return solution.join("-");
}

abbreviate("Accessibility");
