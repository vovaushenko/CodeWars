// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a

const sortString = (str1, str2) => {
  // remove duplicates firstly
  let arr = [...str2];
  str2 = [...new Set(arr)].join('');
 

  let strangelySorted = [];
  let rest = [];

  for (let char of str2) {
    let found = [...str1].filter((a) => a === char).join('');
    strangelySorted.push(found);
  }

  for (let char of str1) {
    if (!str2.includes(char)) {
      rest.push(char);
    }
  }

  return [...strangelySorted, ...rest].join('');
};