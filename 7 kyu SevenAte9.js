// https://www.codewars.com/kata/559f44187fa851efad000087

const sevenAte9 = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === '7' && str[i] === '9' && str[i + 1] === '7') {
      console.log('7️⃣🥺9️⃣🥺7️⃣');
    } else {
      res += str[i];
    }
  }
  return res;
};
