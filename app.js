<<<<<<< HEAD
// https://www.codewars.com/kata/5c3433a4d828182e420f4197

const ultimateReverse = (arr) => {
  let solution = [];
  let arrJoin = arr.join('');

  let reverse = [...arrJoin].reverse().join('');

  // lets do this recursively
  let counter = 0;
  const ultimateReverser = (str) => {
    if (str.length === 0) {
      return;
    }
    let reversedWord = '';
    for (let i = 0; i < arr[counter].length; i++) {
      reversedWord += arr[counter][i];
    }
    solution.push(reversedWord);
    counter++;

    ultimateReverser(str.substring(arr[0].length));
  };
  ultimateReverser(reverse);
  console.log(solution);
};

ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']);

// "!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
=======
// https://www.codewars.com/kata/5250a89b1625e5decd000413

const flatten = (arr) => {
  let result = [];
  for (let el of arr) {
    if (typeof el === "object") {
      for (content of el) {
        result.push(content);
      }
    } else {
      result.push(el);
    }
  }
  return result;
};

flatten([1, 2, 3]);
>>>>>>> d21b3808109c74e225f037b8cfd7a672e07835ce
