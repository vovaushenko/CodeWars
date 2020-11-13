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
