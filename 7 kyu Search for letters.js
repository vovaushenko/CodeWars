// https://www.codewars.com/kata/52dbae61ca039685460001ae

const change = (string) => {
  let toLowerCase = [...string].map((a) => a.toLowerCase()).join('');
  toLowerCase = toLowerCase.replace(/[^a-z]/g, '');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < alphabet.length; i++) {
    if (toLowerCase.includes(alphabet[i])) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
};