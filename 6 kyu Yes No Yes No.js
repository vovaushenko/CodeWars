// https://www.codewars.com/kata/573c84bf0addf9568d001299

const yesNo = (arr) => {
  let solution = [];

  let helper = (a) => {
    if (a.length === 0) {
      return;
    }
    let takenAway = [];

    for (let i = 0; i < a.length; i++) {
      if (i % 2 == 0) {
        solution.push(a[i]);
      } else {
        takenAway.push(a[i]);
      }
    }

    helper(takenAway);
  };

  helper(arr);

  return solution;
};
